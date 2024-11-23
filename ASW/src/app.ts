import "reflect-metadata"

import { AppDataSource } from "./data-source"

import { Aspirante } from "./entity/Aspirante";
import { Curso } from "./entity/Curso";
import { Inscripcion } from "./entity/Inscripcion";

AppDataSource.initialize().then(async () => {

    console.log("Insertando Inscripcion 1...");
    const inscripcion1 = new Inscripcion();
    inscripcion1.ID_Curso = 1;
    inscripcion1.ID_Aspirante = 1;
    inscripcion1.Fecha = '2024/07/20';
    inscripcion1.Hora = '10:00';
    inscripcion1.Valor_cancelado = '1000';
    await AppDataSource.manager.save(inscripcion1)
    console.log("Guardando la Incripcion con el ID: " + inscripcion1.ID)
    
    console.log("Insertando Inscripcion 2...");
    const inscripcion2 = new Inscripcion();
    inscripcion2.ID_Curso = 1;
    inscripcion2.ID_Aspirante = 2;
    inscripcion2.Fecha = '2024/07/30';
    inscripcion2.Hora = '16:00';
    inscripcion2.Valor_cancelado = '1500';
    await AppDataSource.manager.save(inscripcion2)
    console.log("Saved a new Inscripcion with id: " + inscripcion2.ID)
    
    console.log("Insertando Inscripcion 3...");
    const inscripcion3 = new Inscripcion();
    inscripcion3.ID_Curso = 1;
    inscripcion3.ID_Aspirante = 1;
    inscripcion3.Fecha = '2024/08/06';
    inscripcion3.Hora = '08:00';
    inscripcion3.Valor_cancelado = '1750';
    await AppDataSource.manager.save(inscripcion3)
    console.log("Saved a new Inscripcion with id: " + inscripcion3.ID)
    
    console.log("Insertando Inscripcion 4...");
    const inscripcion4 = new Inscripcion();
    inscripcion4.ID_Curso = 1;
    inscripcion4.ID_Aspirante = 1;
    inscripcion4.Fecha = '2024/08/20';
    inscripcion4.Hora = '10:00';
    inscripcion4.Valor_cancelado = '2000';
    await AppDataSource.manager.save(inscripcion4)
    console.log("Saved a new Inscripcion with id: " + inscripcion4.ID)

    const inscriptions = await AppDataSource.manager.find(Inscripcion);
    console.log("Loaded inscriptions: ", inscriptions);
}).catch(error => console.log(error))
