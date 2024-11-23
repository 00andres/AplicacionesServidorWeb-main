import { IAspirante,ICurso,Inscripcion,Inscripciones,Cursos,Aspirantes } from "./Tarea";
async function buscarInscripcionAsyncAwait(id:number){
    const inscripcion = Inscripciones.find(inscripcion => inscripcion.ID === id);
    if (!inscripcion) {
        throw new Error('No se encontró el inscripcion');
    }
    return inscripcion;
}

async function buscarAspiranteAsyncAwait(id:number){
    const aspirante = Aspirantes.find(aspirante => aspirante.ID === id);
    if (!aspirante) {
        throw new Error('No se encontró el aspirante');
    }
    return aspirante;

}

async function buscarCursoAsyncAwait(id:number){
    const curso = Cursos.find(curso => curso.ID === id);
    if (!curso) {
        throw new Error('No se encontró el curso');
    }
    return curso;
}
export {
    buscarInscripcionAsyncAwait,
    buscarAspiranteAsyncAwait,
    buscarCursoAsyncAwait,
 };