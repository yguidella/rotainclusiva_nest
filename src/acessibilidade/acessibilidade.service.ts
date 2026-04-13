import { Injectable } from '@nestjs/common';
import { CreateAcessibilidadeDto } from './dto/create-acessibilidade.dto';
import { UpdateAcessibilidadeDto } from './dto/update-acessibilidade.dto';

@Injectable()
export class AcessibilidadeService {
  create(createAcessibilidadeDto: CreateAcessibilidadeDto) {
    return 'This action adds a new acessibilidade';
  }

  findAll() {
    return `This action returns all acessibilidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acessibilidade`;
  }

  update(id: number, updateAcessibilidadeDto: UpdateAcessibilidadeDto) {
    return `This action updates a #${id} acessibilidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} acessibilidade`;
  }
}
