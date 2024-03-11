export class Contenido{
  
         id!:string;
         nombre!:string;
         descripcion!:string;
         calificacion:number;
         tipoContenido!:number

  
         constructor() {
            this.calificacion = 0; // O cualquier otro valor inicial que desees
          }
  
}