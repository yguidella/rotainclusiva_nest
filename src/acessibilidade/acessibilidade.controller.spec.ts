import { Test, TestingModule } from '@nestjs/testing';
import { AcessibilidadeController } from './acessibilidade.controller';
import { AcessibilidadeService } from './acessibilidade.service';

describe('AcessibilidadeController', () => {
  let controller: AcessibilidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcessibilidadeController],
      providers: [AcessibilidadeService],
    }).compile();

    controller = module.get<AcessibilidadeController>(AcessibilidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
