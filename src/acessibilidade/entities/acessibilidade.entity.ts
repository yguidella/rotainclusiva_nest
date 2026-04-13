import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_acessibilidade" })
export class Acessibilidade {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  tipo!: string;

  @Column({ default: false })
  precisaApoio!: boolean;

  @Column({ nullable: true })
  descricao?: string;

  @ManyToOne(() => Usuario, usuario => usuario.acessibilidades, {
    onDelete: 'CASCADE'
  })
  usuario!: Usuario;
}