"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarAspirante = buscarAspirante;
exports.buscarCurso = buscarCurso;
exports.buscarInscripcion = buscarInscripcion;
const Tarea_1 = require("./Tarea");
// Definir una función que reciba como parámetros: un arreglo de elementos de su 
// entidad transaccional, un ID y una función con el método de búsqueda; debe devolver
// el objeto encontrado, y luego mostrarlo por consola u otro medio usando el Callback.
function buscarCurso(id, callback) {
    const curso = Tarea_1.Cursos.find(curso => curso.ID === id);
    if (!curso) {
        callback(new Error(`No se ha encontrado el curso con id ${id}`));
        return;
    }
    callback(null, curso);
}
function buscarAspirante(id, callback) {
    const aspirante = Tarea_1.Aspirantes.find(aspirante => aspirante.ID === id);
    if (!aspirante) {
        callback(new Error(`No se ha encontrado el aspirante con id ${id}`));
        return;
    }
    callback(null, aspirante);
}
function buscarInscripcion(id, callback) {
    const inscripcion = Tarea_1.Inscripciones.find(inscripcion => inscripcion.ID === id);
    if (!inscripcion) {
        callback(new Error(`No se ha encontrado la inscripción con id ${id}`));
        return;
    }
    callback(null, inscripcion);
}
