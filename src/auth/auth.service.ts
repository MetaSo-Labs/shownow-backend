import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async verify(username: string, password: string) {
    const USERNAME = this.configService.get('USERNAME');
    const PASSWORD = this.configService.get('PASSWORD');
    console.log(USERNAME,PASSWORD)

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
  async userInfo() {
    const USERNAME = this.configService.get('USERNAME');
    return { username: USERNAME, role: 'admin' };
  }
}
