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
      relations: { usuario: true }, // Carrega o usuário dono da acessibilidade
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

  async findByDescricao(descricao: string): Promise<Acessibilidade[]> {
    return await this.repository.find({
      where: { descricao: ILike(`%${descricao}%`) },
      relations: { usuario: true },
    });
  }

  async create(acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    // Como tiramos o DTO, o objeto vem tipado pela própria Entity
    return await this.repository.save(acessibilidade);
  }

  async update(acessibilidade: Acessibilidade): Promise<Acessibilidade> {
    // Verifica se o ID existe antes de tentar atualizar
    await this.findById(acessibilidade.id);
    
    return await this.repository.save(acessibilidade);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.repository.delete(id);
  }
}