import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';
import { LoginWithWallerDto } from './dto/index.dto';
import { verifyMessage } from 'src/lib/utils';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private usersService: UsersService,
  ) {}
  async verify(username: string, password: string) {
    const USERNAME = this.configService.get('USERNAME');
    const PASSWORD = this.configService.get('PASSWORD');
    if (username === USERNAME && password === PASSWORD) {
      const payload = { username, role: 'admin' };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new HttpException(
        'username or password error',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async verifyWallet(loginDot: LoginWithWallerDto) {
    const { btcAddress, signature, mvcAddress, publicKey } = loginDot;

    let admin = await this.usersService.findAdmin();

    if (!admin) {
      await this.usersService.create({
        btcAddress,
        role: 'admin',
        mvcAddress,
        publicKey,
        host: btcAddress,
        distribution: false,
        assist: false,
        createTime: new Date(),
        updateTime: new Date(),
      });
      admin = await this.usersService.findAdmin();
    }
    if (
      admin.btcAddress !== btcAddress ||
      admin.mvcAddress !== mvcAddress ||
      admin.publicKey !== publicKey
    ) {
      throw new HttpException('address not match', HttpStatus.BAD_REQUEST);
    }
    const verifySignature = verifyMessage(
      admin.publicKey,
      'metaso.network',
      signature,
    );
    if (verifySignature) {
      const payload = { btcAddress, role: 'admin' };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new HttpException('signature error', HttpStatus.BAD_REQUEST);
    }
  }
  async userInfo() {
    const USERNAME = this.configService.get('USERNAME');
    return { username: USERNAME, role: 'admin' };
  }
}
