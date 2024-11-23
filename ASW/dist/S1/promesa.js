"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarInscripcionPromise = buscarInscripcionPromise;
exports.buscarAspirantePromise = buscarAspirantePromise;
exports.buscarCursoPromise = buscarCursoPromise;
const Tarea_1 = require("./Tarea");
function buscarInscripcionPromise(id) {
    return new Promise((resolve, reject) => {
        const inscripcion = Tarea_1.Inscripciones.find(inscripcion => inscripcion.ID === id);
        if (inscripcion) {
            resolve(inscripcion);
        }
        else {
            const error = new Error('No se encontró el inscripcion');
            reject(error);
        }
    });
}
function buscarAspirantePromise(id) {
    return new Promise((resolve, reject) => {
        const aspirante = Tarea_1.Aspirantes.find(aspirante => aspirante.ID === id);
        if (aspirante) {
            resolve(aspirante);
        }
        else {
            const error = new Error('No se encontró el aspirante');
            reject(error);
        }
    });
}
function buscarCursoPromise(id) {
    return new Promise((resolve, reject) => {
        const curso = Tarea_1.Cursos.find(curso => curso.ID === id);
        if (curso) {
            resolve(curso);
        }
        else {
            const error = new Error('No se encontró el curso');
            reject(error);
        }
    });
}
