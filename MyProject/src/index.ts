import { AppDataSource } from "./data-source"
import { Curso } from './entity/Curso';
import { Aspirante } from './entity/Aspirante';
import { createInscripcion, getAllInscripciones } from './FuncionesTypeORM';
AppDataSource.initialize()
.then(async () => {
  // Crear una nueva inscripción
  const newInscripcion = await createInscripcion({
    ID_Curso: 1,
    ID_Aspirante: 3,
    Fecha: '2024-08-20',
    Hora: '11:00',
    Valor_cancelado: '700'
  });
  console.log("New Inscripcion:", newInscripcion);

  // Consultar todas las inscripciones
  const allInscripciones = await getAllInscripciones();
  console.log("All Inscripciones:", allInscripciones);
})
.catch((error) => {
  console.error("Error during Data Source initialization", error);
});