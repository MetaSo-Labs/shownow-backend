import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDot: Record<string, any>) {
    return this.authService.verify(loginDot.username, loginDot.password);
  }

  @Get('profile')
  getProfile() {
    return this.authService.userInfo();
  }
}
