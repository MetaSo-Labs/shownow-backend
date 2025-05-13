import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeesService } from 'src/fees/fees.service';
import { CreateFeeDto } from 'src/fees/dto/create-fee.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private feesService: FeesService,
    private configService: ConfigService,
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
    // notice metaso
    this.noticeMetaSo();
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
        domainName: updateUserDto.domainName || admin.domainName,
        host: updateUserDto.host || admin.host,
        introduction: updateUserDto.introduction || admin.introduction,
        updateTime: new Date(),
      });
      // notice metaso
      this.noticeMetaSo();
      return { message: 'success' };
    } else {
      throw new Error('admin not exists');
    }
  }

  async updateAdminDistribution(updateUserDto: { distribution: boolean }) {
    const admin = await this.repo.findOne({
      where: { role: 'admin' },
    });
    if (admin) {
      await this.repo.update(admin.id, {
        distribution: updateUserDto.distribution,
        updateTime: new Date(),
      });
      return { message: 'success' };
    } else {
      throw new Error('admin not exists');
    }
  }

  async updateAdminAssist(updateUserDto: { assist: boolean }) {
    const admin = await this.repo.findOne({
      where: { role: 'admin' },
    });
    if (admin) {
      await this.repo.update(admin.id, {
        assist: updateUserDto.assist,
        updateTime: new Date(),
      });
      return { message: 'success' };
    } else {
      throw new Error('admin not exists');
    }
  }

  async noticeMetaSo() {
    try {
      const admin = await this.repo.findOne({
        where: { role: 'admin' },
      });
      if (!admin) {
        throw new Error('admin not exists');
      }
      const noticeUrl =
        this.configService.get('NETWORK') === 'testnet'
          ? 'https://www.metaso.network/api-base-testnet/v1/metaso/host/domain-push'
          : 'https://www.metaso.network/api-base-grey/v1/metaso/host/domain-push';

      const response = await axios.post(noticeUrl, {
        domain: admin.domainName,
        host: admin.host,
      });
      console.log('第三方接口数据:', noticeUrl, response.data);
    } catch (error) {
      console.error('调用第三方接口失败:', error);
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
