import { Test, TestingModule } from '@nestjs/testing';
import { AcessibilidadeService } from './acessibilidade.service';

describe('AcessibilidadeService', () => {
  let service: AcessibilidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcessibilidadeService],
    }).compile();

    service = module.get<AcessibilidadeService>(AcessibilidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
