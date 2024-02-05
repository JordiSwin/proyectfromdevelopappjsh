import { Injectable } from '@angular/core';
import { Contenido } from '../models/contenido';
import { tipoContenido } from '../models/tipo_contenido';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private contenido: Contenido[] = [];
  private tipocontenido: tipoContenido[] = [];

  constructor() {
    this.contenido = [];
    this.tipocontenido = [
      {
        id: 0,
        formato: 'Peli o Serie?'
      },
      {
        id: 1,
        formato: 'Pelicula'
      },
      {
        id: 2,
        formato: 'Serie'
      }
    ];
  }

  getContenido() {
    return this.contenido;
  }

  getTiposcontenido() {
    return this.tipocontenido;
  }

  AgregarContenido(contenido: Contenido) {
    this.contenido.push(contenido);
  }
  

  nuevoContenido(): Contenido {
    return {
      id: this.contenido.length + 1,
      nombre: '',
      descripcion: '',
      calificacion: 0,
      tipoContenido:0
    };
  }
}
