import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AcessibilidadeService } from '../service/acessibilidade.service';
import { Acessibilidade } from '../entities/acessibilidade.entity';

@Controller('/acessibilidades')
export class AcessibilidadeController {
  constructor(private readonly acessibilidadeService: AcessibilidadeService) {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Acessibilidade[]> {
    return this.acessibilidadeService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Acessibilidade> {
    return this.acessibilidadeService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findByDescricao(@Param('descricao') descricao: string): Promise<Acessibilidade[]> {
    return this.acessibilidadeService.findByDescricao(descricao);
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    return this.acessibilidadeService.create(acessibilidade);
  }

  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    return this.acessibilidadeService.update(acessibilidade);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.acessibilidadeService.delete(id);
  }
}