import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Acessibilidade } from '../entities/acessibilidade.entity';

@Injectable()
export class AcessibilidadeService {
  constructor(
    @InjectRepository(Acessibilidade)
    private readonly repository: Repository<Acessibilidade>,
  ) {}

  async findAll(): Promise<Acessibilidade[]> {
    return await this.repository.find({
      relations: { usuario: true },
    });
  }

  async findById(id: number): Promise<Acessibilidade> {
    const busca = await this.repository.findOne({
      where: { id },
      relations: { usuario: true },
    });

    if (!busca) {
      throw new HttpException('Acessibilidade não encontrada!', HttpStatus.NOT_FOUND);
    }

    return busca;
  }

  async findBytipo(tipo: string): Promise<Acessibilidade[]> {
    return await this.repository.find({
      where: { tipo: ILike(`%${tipo}%`) },
      relations: { usuario: true },
    });
  }

  async create(acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    return await this.repository.save(acessibilidade);
  }

  async update(acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    await this.findById(acessibilidade.id);
    
    return await this.repository.save(acessibilidade);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.repository.delete(id);
  }
}