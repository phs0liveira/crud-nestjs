import { Test, TestingModule } from '@nestjs/testing';
import { TypeActivityController } from './type-activity.controller';
import { TypeActivityService } from './type-activity.service';

describe('TypeActivityController', () => {
  let controller: TypeActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeActivityController],
      providers: [TypeActivityService],
    }).compile();

    controller = module.get<TypeActivityController>(TypeActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
