import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { LoginWithWallerDto } from './dto/index.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDot: Record<string, any>) {
    // return this.authService.verify(loginDot.username, loginDot.password);
    // throw ('api is deprecated');
    throw new HttpException('api is deprecated', HttpStatus.BAD_REQUEST);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('loginWithWallet')
  signInWithWallet(@Body() loginDot: LoginWithWallerDto) {
    return this.authService.verifyWallet(loginDot);
  }

  @Get('profile')
  getProfile() {
    return this.authService.userInfo();
  }
}
