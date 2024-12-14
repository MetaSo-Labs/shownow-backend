import { Module } from '@nestjs/common';
import { ShowConfService } from './show-conf.service';
import { ShowConfController } from './show-conf.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowConf } from './entities/show-conf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShowConf])],
  controllers: [ShowConfController],
  providers: [ShowConfService],
})
export class ShowConfModule {}
