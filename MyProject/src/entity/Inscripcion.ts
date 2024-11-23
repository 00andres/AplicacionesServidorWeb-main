import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Curso } from './Curso';
import { Aspirante } from './Aspirante';

@Entity()
export class Inscripcion {
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    ID_Curso: number;
    @Column()
    ID_Aspirante: number;
    @Column()
    Fecha: string;

    @Column()
    Hora: string;

    @Column()
    Valor_cancelado: string;


}
