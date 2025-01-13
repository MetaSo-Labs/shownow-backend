import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeesService } from 'src/fees/fees.service';
import { CreateFeeDto } from 'src/fees/dto/create-fee.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private feesService: FeesService,
  ) {}

  async onApplicationBootstrap() {
    await this.checkHost();
  }

  private async checkHost() {
    const admin = await this.repo.findOne({
      where: { role: 'admin' },
    });
    if (admin && !admin.host) {
      await this.repo.update(admin.id, {
        host: admin.btcAddress,
        updateTime: new Date(),
      });
    }
  }
  async create(createUserDto: CreateUserDto) {
    const admin = await this.repo.findOne({
      where: { role: 'admin' },
    });
    if (!admin) {
      await this.repo.save(createUserDto);
      const BtcFees: CreateFeeDto = {
        chain: 'BTC',
        service_fee_address: createUserDto.btcAddress,
        follow_service_fee_amount: 1999,
        post_service_fee_amount: 1999,
        comment_service_fee_amount: 1999,
        like_service_fee_amount: 1999,
        donate_service_fee_amount: 1999,
        createTime: new Date(),
        updateTime: new Date(),
      };
      const mvcFees: CreateFeeDto = {
        chain: 'MVC',
        service_fee_address: createUserDto.mvcAddress,
        follow_service_fee_amount: 1999,
        post_service_fee_amount: 1999,
        comment_service_fee_amount: 1999,
        like_service_fee_amount: 1999,
        donate_service_fee_amount: 1999,
        createTime: new Date(),
        updateTime: new Date(),
      };
      await this.feesService.create(BtcFees);
      await this.feesService.create(mvcFees);
    } else {
      throw new Error('admin already exists');
    }
    return { message: 'success' };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findAdmin() {
    return await this.repo.findOne({ where: { role: 'admin' } });
  }

  async updateAdmin(updateUserDto: UpdateUserDto) {
    const admin = await this.repo.findOne({
      where: { role: 'admin' },
    });
    if (admin) {
      await this.repo.update(admin.id, {
        domainName: updateUserDto.domainName,
        host: updateUserDto.host,
        updateTime: new Date(),
      });
      return { message: 'success' };
    } else {
      throw new Error('admin not exists');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
