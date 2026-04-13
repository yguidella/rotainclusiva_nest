import { PartialType } from '@nestjs/mapped-types';
import { CreateAcessibilidadeDto } from './create-acessibilidade.dto';

export class UpdateAcessibilidadeDto extends PartialType(CreateAcessibilidadeDto) {}
