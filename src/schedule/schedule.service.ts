import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  constructor(private usersService: UsersService) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    await this.usersService.noticeMetaSo();
  }
}
