"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Aspirante_1 = require("./entity/Aspirante");
const Curso_1 = require("./entity/Curso");
const Inscripcion_1 = require("./entity/Inscripcion");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica                                                                                                                                                             ",
    synchronize: true,
    logging: false,
    entities: [Aspirante_1.Aspirante, Curso_1.Curso, Inscripcion_1.Inscripcion],
    migrations: [],
    subscribers: [],
});
