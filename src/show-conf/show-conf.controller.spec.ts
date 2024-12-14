import { Test, TestingModule } from '@nestjs/testing';
import { ShowConfController } from './show-conf.controller';
import { ShowConfService } from './show-conf.service';

describe('ShowConfController', () => {
  let controller: ShowConfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowConfController],
      providers: [ShowConfService],
    }).compile();

    controller = module.get<ShowConfController>(ShowConfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
