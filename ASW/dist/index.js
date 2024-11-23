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
const data_source_1 = require("./data-source");
const Inscripcion_1 = require("./entity/Inscripcion");
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Insertando Inscripcion 1...");
    const inscripcion1 = new Inscripcion_1.Inscripcion();
    inscripcion1.ID_Curso = 1;
    inscripcion1.ID_Aspirante = 1;
    inscripcion1.Fecha = '2024/07/20';
    inscripcion1.Hora = '10:00';
    inscripcion1.Valor_cancelado = '1000';
    yield data_source_1.AppDataSource.manager.save(inscripcion1);
    console.log("Guardando la Incripcion con el ID: " + inscripcion1.ID);
    console.log("Insertando Inscripcion 2...");
    const inscripcion2 = new Inscripcion_1.Inscripcion();
    inscripcion2.ID_Curso = 1;
    inscripcion2.ID_Aspirante = 2;
    inscripcion2.Fecha = '2024/07/30';
    inscripcion2.Hora = '16:00';
    inscripcion2.Valor_cancelado = '1500';
    yield data_source_1.AppDataSource.manager.save(inscripcion2);
    console.log("Saved a new Inscripcion with id: " + inscripcion2.ID);
    console.log("Insertando Inscripcion 3...");
    const inscripcion3 = new Inscripcion_1.Inscripcion();
    inscripcion3.ID_Curso = 1;
    inscripcion3.ID_Aspirante = 1;
    inscripcion3.Fecha = '2024/08/06';
    inscripcion3.Hora = '08:00';
    inscripcion3.Valor_cancelado = '1750';
    yield data_source_1.AppDataSource.manager.save(inscripcion3);
    console.log("Saved a new Inscripcion with id: " + inscripcion3.ID);
    console.log("Insertando Inscripcion 4...");
    const inscripcion4 = new Inscripcion_1.Inscripcion();
    inscripcion4.ID_Curso = 1;
    inscripcion4.ID_Aspirante = 1;
    inscripcion4.Fecha = '2024/08/20';
    inscripcion4.Hora = '10:00';
    inscripcion4.Valor_cancelado = '2000';
    yield data_source_1.AppDataSource.manager.save(inscripcion4);
    console.log("Saved a new Inscripcion with id: " + inscripcion4.ID);
    const inscriptions = yield data_source_1.AppDataSource.manager.find(Inscripcion_1.Inscripcion);
    console.log("Loaded inscriptions: ", inscriptions);
})).catch(error => console.log(error));
