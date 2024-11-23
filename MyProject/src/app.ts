// src/main.ts or src/controllers/inscripcionController.ts
import { createInscripcion, getAllInscripciones } from "./FuncionesTypeORM";

// Ejemplo de uso de createInscripcion
const newInscripcion = await createInscripcion({
    ID_Curso: 1,
    ID_Aspirante: 2,
    Fecha: '2024-09-18',
    Hora: '10:00',
    Valor_cancelado: '100'
});
console.log("New Inscripcion:", newInscripcion);

// Ejemplo de uso de getAllInscripciones
const allInscripciones = await getAllInscripciones();
console.log("All Inscripciones:", allInscripciones);
