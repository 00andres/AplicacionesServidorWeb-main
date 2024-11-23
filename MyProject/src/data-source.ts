import "reflect-metadata"
import { DataSource } from "typeorm"
import { Aspirante } from "./entity/Aspirante";
import { Curso } from "./entity/Curso";
import { Inscripcion } from "./entity/Inscripcion";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica",
    synchronize: true,
    logging: false,
    entities: [Aspirante, Curso, Inscripcion],
    migrations: [],
    subscribers: [],
})
