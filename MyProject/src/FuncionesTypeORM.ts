import { AppDataSource } from "./data-source"
import { Inscripcion } from './entity/Inscripcion';


export const createInscripcion = async (data: {
    ID_Curso: number;
    ID_Aspirante: number;
    Fecha: string;
    Hora: string;
    Valor_cancelado: string;
}): Promise<Inscripcion> => {
    const inscripcionRepository = AppDataSource.getRepository(Inscripcion);
    
    const inscripcion = new Inscripcion();
    inscripcion.ID_Curso = data.ID_Curso;
    inscripcion.ID_Aspirante = data.ID_Aspirante;
    inscripcion.Fecha = data.Fecha;
    inscripcion.Hora = data.Hora;
    inscripcion.Valor_cancelado = data.Valor_cancelado;

    return await inscripcionRepository.save(inscripcion);
};
export const getAllInscripciones = async (): Promise<Inscripcion[]> => {
    const inscripcionRepository = AppDataSource.getRepository(Inscripcion);
    return await inscripcionRepository.find();
};