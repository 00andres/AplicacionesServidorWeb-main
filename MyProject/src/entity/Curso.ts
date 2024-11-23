import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Inscripcion } from './Inscripcion';

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripción: string;

    @Column()
    Fecha_de_inicio: string;

 
}
