"use strict";
// import { IAspirante,ICurso,Inscripcion,Inscripciones,Cursos,Aspirantes} from "./P1";
// import { buscarAspirante,buscarCurso,buscarInscripcion } from "./P1";
// import { buscarInscripcionPromise, buscarAspirantePromise, buscarCursoPromise } from "./P1";
// import { buscarAspiranteAsyncAwait,buscarInscripcionAsyncAwait,buscarCursoAsyncAwait} from "./P1";
// import { ICatImagen,fetchDataWithPromises,fetchDataWithAsyncAwait } from "./P1";
//  Recorrer y mostrar los elementos de sus arreglos de objetos aplicando instrucciones 
// inscripcion ciclos distintas a su preferencia.
// Cursos.forEach(Cursos =>{
//     console.log(`ID: ${Cursos.ID}, Descripcion: ${Cursos.Descripción}, Fecha: ${Cursos.Fecha_de_inicio}`); 
// } );
// for (let MAspiran of Aspirantes) {
//     console.log(`ID: ${MAspiran.ID}, Nombre: ${MAspiran.Nombre}, Identificacion: ${MAspiran.Identificación}`);
// }
// for (let i in Inscripciones) {
//     if (Inscripciones.hasOwnProperty(i)) {
//         let MInscripcion = Inscripciones[i];
//         console.log(`ID: ${MInscripcion.ID},ID Curso: ${MInscripcion.ID_Curso}, ID Aspirante: ${MInscripcion.ID_Aspirante}, Fecha: ${MInscripcion.Fecha}, Hora: ${MInscripcion.Hora}, Valor: ${MInscripcion.Valor_cancelado}`);
//     }
// }
// Ejemplo de Buscador con callbacks
// buscarInscripcion(1, (error, inscripcion) => {
//     if (error) {
//         console.error(error);
//         return;
//     }
//     console.log('Inscripcion');
//     console.log(inscripcion); 
//     buscarCurso(inscripcion!.ID_Curso,(error, curso) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//         console.log('Curso');
//         console.log(curso);
//         buscarAspirante(inscripcion!.ID_Aspirante,(error, aspirante) => {
//             if (error) {
//                 console.error(error);
//                 return;
//             }
//             console.log('Aspirante');
//             console.log(aspirante);
//         });
//     });
// });
// Ejemplo de Buscador con promesas
// buscarInscripcionPromise(2)
//     .then(inscripcion => {
//         console.log('Inscripcion:');
//         console.log(inscripcion);
//         })
//      .catch(error => console.error(error));
// buscarCursoPromise(3)
//      .then(curso => {
//         console.log('Curso:');
//         console.log(curso);
//       })
//       .catch(error => console.error(error));
// buscarAspirantePromise(4)
//      .then(aspirante => {
//         console.log('Aspirante:');
//         console.log(aspirante);
//       })
//       .catch(error => console.error(error));
// Ejemplo de Buscador con async/await
// async function main() {
//     try {
//         const inscrip = await buscarInscripcionAsyncAwait(5);
//         console.log(inscrip);
//         const aspirante = await buscarAspiranteAsyncAwait(inscrip.ID_Aspirante);
//         console.log(aspirante);
//         const curso = await buscarCursoAsyncAwait(inscrip.ID_Curso);
//         console.log(curso);
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();
//FetchData con Promesas
// fetchDataWithPromises<ICatImagen>('https://api.thecatapi.com/v1/images/search')
//     .then(response => {
//         if (response.length > 0) {
//             console.log('Imagen del gato:', response[0].url);
//         } else {
//             console.log('No se encontraron imágenes.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// FetchData con Async/Await
// (async () => {
//     try {
//         const response = await fetchDataWithAsyncAwait<ICatImagen>('https://api.thecatapi.com/v1/images/search');
//         if (response.length > 0) {
//             console.log('Imagen del gato:', response[0].url);
//         } else {
//             console.log('No se encontraron imágenes.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
