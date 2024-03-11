import { Injectable } from '@angular/core';
import { Contenido } from '../models/contenido';
import { tipoContenido } from '../models/tipo_contenido';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private contenido: Contenido[] = [];
  private tipocontenido: tipoContenido[] = [];

  constructor(private firestore: AngularFirestore) {
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
    return this.firestore.collection('contenidos').snapshotChanges();
  }

  getTiposcontenido() {
    return this.tipocontenido;
  }

  agregarContenido(contenido: Contenido) {
    return this.firestore.collection('contenidos').add(Object.assign({}, contenido));
  }
  
   updateContenido(contenido: Contenido) {
    this.firestore.doc('contenidos/' + contenido.id).update(contenido);
  }

  deleteContenido(contenidoId: string) {
    this.firestore.doc('contenidos/' + contenidoId).delete();
  }


  nuevoContenido(): Contenido {
    return {
      id: '',
      nombre: '',
      descripcion: '',
      calificacion: 0,
      tipoContenido:0
    };
  }
}
