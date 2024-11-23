import { IAspirante,ICurso,Inscripcion,Inscripciones,Cursos,Aspirantes } from "./Tarea";
// Definir una función que reciba como parámetros: un arreglo de elementos de su 
// entidad transaccional, un ID y una función con el método de búsqueda; debe devolver
// el objeto encontrado, y luego mostrarlo por consola u otro medio usando el Callback.
function buscarCurso(id: number , 
    callback: (error: Error | null, curso?: ICurso) => void) {
    const curso = Cursos.find(curso => curso.ID === id);
    if (!curso) {
        callback(new Error(`No se ha encontrado el curso con id ${id}`));
        return;
    }
    callback(null, curso);
}

function buscarAspirante(id: number, 
    callback: (error: Error | null, aspirante?: IAspirante) => void) {
        const aspirante = Aspirantes.find(aspirante => aspirante.ID === id);
        if (!aspirante) {
            callback(new Error(`No se ha encontrado el aspirante con id ${id}`));
            return;
        }
        callback(null, aspirante);
    }

function buscarInscripcion(id: number, 
    callback: (error: Error | null, inscripcion?: Inscripcion) => void) {
        const inscripcion = Inscripciones.find(inscripcion => inscripcion.ID === id);
        if (!inscripcion) {
            callback(new Error(`No se ha encontrado la inscripción con id ${id}`));
            return;
        }
        callback(null, inscripcion);
    }
export {
    buscarAspirante,
    buscarCurso,
    buscarInscripcion
}