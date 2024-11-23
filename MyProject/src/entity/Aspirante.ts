import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Inscripcion } from './Inscripcion';

@Entity()
export class Aspirante {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Identificación: string;


}
