"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aspirantes = exports.Cursos = exports.Inscripciones = void 0;
// 1. Definir un arreglo de objetos en base a sus 3 entidades asignadas con por lo menos 5 elementos
const Cursos = [
    { ID: 1, Descripción: 'Matematicas', Fecha_de_inicio: '2024/09/01' },
    { ID: 2, Descripción: 'Fisica', Fecha_de_inicio: '2024/08/01' },
    { ID: 3, Descripción: 'Ingles', Fecha_de_inicio: '2024/07/01' },
    { ID: 4, Descripción: 'Sociales', Fecha_de_inicio: '2024/06/01' },
    { ID: 5, Descripción: 'Quimica', Fecha_de_inicio: '2024/05/01' }
];
exports.Cursos = Cursos;
const Aspirantes = [
    { ID: 1, Nombre: 'Juan', Identificación: '123456' },
    { ID: 2, Nombre: 'Pedro', Identificación: '654321' },
    { ID: 3, Nombre: 'Enrique', Identificación: '989898' },
    { ID: 4, Nombre: 'Maria', Identificación: '789654' },
    { ID: 5, Nombre: 'Luis', Identificación: '369854' },
];
exports.Aspirantes = Aspirantes;
const Inscripciones = [
    { ID: 1, ID_Curso: 1, ID_Aspirante: 1, Fecha: '2024/08/19', Hora: '10:30', Valor_cancelado: '1000' },
    { ID: 2, ID_Curso: 2, ID_Aspirante: 3, Fecha: '2024/08/10', Hora: '10:30', Valor_cancelado: '2000' },
    { ID: 3, ID_Curso: 3, ID_Aspirante: 4, Fecha: '2024/08/17', Hora: '10:30', Valor_cancelado: '3000' },
    { ID: 4, ID_Curso: 5, ID_Aspirante: 1, Fecha: '2024/08/20', Hora: '10:30', Valor_cancelado: '4000' },
    { ID: 5, ID_Curso: 2, ID_Aspirante: 5, Fecha: '2024/09/25', Hora: '10:30', Valor_cancelado: '5000' },
];
exports.Inscripciones = Inscripciones;
