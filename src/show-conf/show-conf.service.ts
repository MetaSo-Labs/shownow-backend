import { Injectable } from '@nestjs/common';
import { CreateShowConfDto } from './dto/create-show-conf.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowConf } from './entities/show-conf.entity';
import { Repository } from 'typeorm';
import { DefaultLogo } from 'src/constants/Global';

@Injectable()
export class ShowConfService {
  constructor(
    @InjectRepository(ShowConf)
    private repo: Repository<ShowConf>,
  ) {}

  async onApplicationBootstrap() {
    await this.ensureDataExists();
  }

  private async ensureDataExists() {
    let showNow = await this.repo.findOne({
      where: { alias: 'showNow' },
    });

    if (!showNow) {
      const newData = this.repo.create({
        alias: 'showNow',
        name: 'Metaso',
        brandColor: '#fc457b',
        gradientColor:
          'linear-gradient(90deg, rgb(220,99,204) 0%, rgb(196,94,54) 100%)',
        logo: DefaultLogo,
        theme: 'light',
        showSliderMenu: true,
        showRecommend: true,
        colorBgLayout: '#F6F9FC',
        colorBorderSecondary: '',
        colorHeaderBg: '',
        contentSize: 1200,
        colorButton: '#ffffff',
      });
      await this.repo.save(newData);
      showNow = await this.repo.findOne({
        where: { alias: 'showNow' },
      });
    } else {
      if (
        showNow.logo.indexOf(
          'iVBORw0KGgoAAAANSUhEUgAAALoAAAAwCAYAAACmJWBPAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAA3QSURBVHic7V1fayPXFf',
        ) > -1
      ) {
        showNow.logo = DefaultLogo;
        showNow.name = 'MetaSo';
        await this.repo.save(showNow);
      }
    }

    const bitBuzz = await this.repo.findOne({
      where: { alias: 'bitBuzz' },
    });
    if (!bitBuzz) {
      const newData = this.repo.create({
        alias: 'bitBuzz',
        name: 'bitBuzz',
        brandColor: 'rgb(212,246,107)',
        gradientColor:
          'linear-gradient(90deg, rgb(212,246,107) 0%, rgb(212,246,107) 100%)',
        logo: 'data:image/png;base64,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',
        theme: 'dark',
        showSliderMenu: false,
        showRecommend: false,
        colorBgLayout: '',
        colorBorderSecondary: '#ffffff',
        colorHeaderBg: 'rgb(218, 247, 115)',
        contentSize: 900,
        colorButton: '#000000',
      });
      await this.repo.save(newData);
    }
    const current = await this.repo.findOne({
      where: { apply: true },
    });
    if (!current) {
      await this.repo.update(showNow.id, { apply: true });
    }
  }
  async create(createShowConfDto: CreateShowConfDto) {
    const ret = await this.repo.findOne({
      where: { alias: 'default' },
    });
    if (ret) {
      await this.repo.update(ret.id, createShowConfDto);
    } else {
      await this.repo.save(createShowConfDto);
    }
    return { message: 'success' };
  }

  async save(createShowConfDto: CreateShowConfDto) {
    let id = createShowConfDto.id;
    if (id) {
      await this.repo.update(id, createShowConfDto);
    } else {
      const newOne = await this.repo.save(createShowConfDto);
      id = newOne.id;
    }
    return { message: 'success', id };
  }

  async apply(id: number) {
    const ret = await this.repo.findOne({
      where: { apply: true },
    });
    if (ret) {
      await this.repo.update(ret.id, { apply: false });
    }
    await this.repo.update(id, { apply: true });
  }

  async saveAndApply(createShowConfDto: CreateShowConfDto) {
    const { id } = await this.save(createShowConfDto);
    await this.apply(id);
    return { message: 'success' };
  }

  async findAll() {
    const ret = await this.repo.findOne({
      where: { apply: true },
    });
    if (!ret) {
      return {
        brandColor: '#fc457b',
        gradientColor:
          'linear-gradient(90deg, rgb(220,99,204) 0%, rgb(196,94,54) 100%)',
        logo: DefaultLogo,
      };
    }
    return ret;
  }

  async findAllStyles() {
    const ret = await this.repo.find();
    return ret;
  }
}
