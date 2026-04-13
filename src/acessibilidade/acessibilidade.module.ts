import { Module } from '@nestjs/common';
import { AcessibilidadeService } from './acessibilidade.service';
import { AcessibilidadeController } from './acessibilidade.controller';

@Module({
  controllers: [AcessibilidadeController],
  providers: [AcessibilidadeService],
})
export class AcessibilidadeModule {}
