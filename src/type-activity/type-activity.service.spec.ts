import { Test, TestingModule } from '@nestjs/testing';
import { TypeActivityService } from './type-activity.service';

describe('TypeActivityService', () => {
  let service: TypeActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeActivityService],
    }).compile();

    service = module.get<TypeActivityService>(TypeActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
