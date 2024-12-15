import { Module } from '@nestjs/common';
import { FeesService } from './fees.service';
import { FeesController } from './fees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fee } from './entities/fee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fee])],
  controllers: [FeesController],
  providers: [FeesService],
  exports: [FeesService],
})
export class FeesModule {}
