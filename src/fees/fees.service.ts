import { Injectable } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fee } from './entities/fee.entity';

@Injectable()
export class FeesService {
  constructor(
    @InjectRepository(Fee)
    private feesRepository: Repository<Fee>,
  ) {}
  async create(createFeeDto: CreateFeeDto) {
    const fee = this.feesRepository.create(createFeeDto);
    return await this.feesRepository.save(fee);
  }

  async findAll() {
    return this.feesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fee`;
  }

  async update(id: number, updateFeeDto: UpdateFeeDto) {
    await this.feesRepository.update(id, updateFeeDto);
    return {
      message: 'success',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} fee`;
  }
}
