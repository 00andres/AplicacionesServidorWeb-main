import { IAspirante,ICurso,Inscripcion,Inscripciones,Cursos,Aspirantes } from './Tarea';


function buscarInscripcionPromise(id: number): Promise<Inscripcion> {
    return new Promise((resolve, reject) => {
        const inscripcion = Inscripciones.find(inscripcion => inscripcion.ID === id);
        if (inscripcion) {
            resolve(inscripcion);
        } else {
            const error = new Error('No se encontró el inscripcion');
            reject(error);
        }
    });
}

function buscarAspirantePromise(id: number): Promise<IAspirante> {
    return new Promise((resolve, reject) => {
        const aspirante = Aspirantes.find(aspirante => aspirante.ID === id);
        if (aspirante) {
            resolve(aspirante);
        } else {
            const error = new Error('No se encontró el aspirante');
            reject(error);
        }
    });
}

function buscarCursoPromise(id: number): Promise<ICurso> {
    return new Promise((resolve, reject) => {
        const curso = Cursos.find(curso => curso.ID === id);
        if (curso) {
            resolve(curso);
        } else {
            const error = new Error('No se encontró el curso');
            reject(error);
        }
    });
}

export {
    buscarInscripcionPromise,
    buscarAspirantePromise,
    buscarCursoPromise
}