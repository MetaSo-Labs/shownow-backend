import { Test, TestingModule } from '@nestjs/testing';
import { ShowConfService } from './show-conf.service';

describe('ShowConfService', () => {
  let service: ShowConfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowConfService],
    }).compile();

    service = module.get<ShowConfService>(ShowConfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
