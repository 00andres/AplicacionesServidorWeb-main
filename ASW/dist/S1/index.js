"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataWithAsyncAwait = exports.fetchDataWithPromises = exports.buscarCursoAsyncAwait = exports.buscarInscripcionAsyncAwait = exports.buscarAspiranteAsyncAwait = exports.buscarCursoPromise = exports.buscarAspirantePromise = exports.buscarInscripcionPromise = exports.buscarInscripcion = exports.buscarCurso = exports.buscarAspirante = exports.Inscripciones = exports.Aspirantes = exports.Cursos = void 0;
var Tarea_1 = require("./Tarea");
Object.defineProperty(exports, "Cursos", { enumerable: true, get: function () { return Tarea_1.Cursos; } });
Object.defineProperty(exports, "Aspirantes", { enumerable: true, get: function () { return Tarea_1.Aspirantes; } });
Object.defineProperty(exports, "Inscripciones", { enumerable: true, get: function () { return Tarea_1.Inscripciones; } });
var callback_1 = require("./callback");
Object.defineProperty(exports, "buscarAspirante", { enumerable: true, get: function () { return callback_1.buscarAspirante; } });
Object.defineProperty(exports, "buscarCurso", { enumerable: true, get: function () { return callback_1.buscarCurso; } });
Object.defineProperty(exports, "buscarInscripcion", { enumerable: true, get: function () { return callback_1.buscarInscripcion; } });
var promesa_1 = require("./promesa");
Object.defineProperty(exports, "buscarInscripcionPromise", { enumerable: true, get: function () { return promesa_1.buscarInscripcionPromise; } });
Object.defineProperty(exports, "buscarAspirantePromise", { enumerable: true, get: function () { return promesa_1.buscarAspirantePromise; } });
Object.defineProperty(exports, "buscarCursoPromise", { enumerable: true, get: function () { return promesa_1.buscarCursoPromise; } });
var asyncAwait_1 = require("./asyncAwait");
Object.defineProperty(exports, "buscarAspiranteAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarAspiranteAsyncAwait; } });
Object.defineProperty(exports, "buscarInscripcionAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarInscripcionAsyncAwait; } });
Object.defineProperty(exports, "buscarCursoAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarCursoAsyncAwait; } });
var api_1 = require("./api");
Object.defineProperty(exports, "fetchDataWithPromises", { enumerable: true, get: function () { return api_1.fetchDataWithPromises; } });
Object.defineProperty(exports, "fetchDataWithAsyncAwait", { enumerable: true, get: function () { return api_1.fetchDataWithAsyncAwait; } });
