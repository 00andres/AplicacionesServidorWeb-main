"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarInscripcionAsyncAwait = buscarInscripcionAsyncAwait;
exports.buscarAspiranteAsyncAwait = buscarAspiranteAsyncAwait;
exports.buscarCursoAsyncAwait = buscarCursoAsyncAwait;
const Tarea_1 = require("./Tarea");
function buscarInscripcionAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const inscripcion = Tarea_1.Inscripciones.find(inscripcion => inscripcion.ID === id);
        if (!inscripcion) {
            throw new Error('No se encontró el inscripcion');
        }
        return inscripcion;
    });
}
function buscarAspiranteAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const aspirante = Tarea_1.Aspirantes.find(aspirante => aspirante.ID === id);
        if (!aspirante) {
            throw new Error('No se encontró el aspirante');
        }
        return aspirante;
    });
}
function buscarCursoAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const curso = Tarea_1.Cursos.find(curso => curso.ID === id);
        if (!curso) {
            throw new Error('No se encontró el curso');
        }
        return curso;
    });
}
