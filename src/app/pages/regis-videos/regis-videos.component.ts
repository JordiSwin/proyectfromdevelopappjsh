import { Component, OnInit } from '@angular/core';
import { Contenido } from '../../models/contenido';
import { tipoContenido } from '../../models/tipo_contenido';
import { ContenidoService } from '../../services/contenido.service';

@Component({
  selector: 'app-regis-videos',
  templateUrl: './regis-videos.component.html',
  styleUrls: ['./regis-videos.component.css']
})
export class RegisVideosComponent implements OnInit {
  contenidos: Contenido[] = [];
  contenido = new Contenido();
  tipoContenido: tipoContenido[] = [];

  constructor(private contenidoService: ContenidoService) {}

  ngOnInit(): void {
    this.contenidoService.getContenido().subscribe(data => {
      this.contenidos = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Contenido,
          id: doc.payload.doc.id
        };
      })
    });

    // Obtener los tipos de cliente del servicio y asignarlos a la propiedad tipos
    this.tipoContenido = this.contenidoService.getTiposcontenido();
  }

  insertarContenido() {
    console.log('Insertando contenido:', this.contenido);
    this.contenidoService.agregarContenido(this.contenido); 
    this.contenido = new Contenido();  
  }

  // Metodo para seleccionar un cliente para modificarlo o eliminarlo
  selectContenido(contenidoSeleccionado: Contenido) {
    this.contenido = contenidoSeleccionado;
  }

  // Metodo para modificar y eliminar un cliente
  updateContenido() {
    console.log('Actualizando contenido:', this.contenido);
    this.contenidoService.updateContenido(this.contenido);
    this.contenido = new Contenido();
  }
  
  deleteContenido(id: string) {
    console.log('Eliminando contenido con ID:', id);
    this.contenidoService.deleteContenido(id);
    this.contenido = new Contenido();
  }

  incrementarCalificacion() {
    if (this.contenido.calificacion < 5) {
      this.contenido.calificacion += 1;
    }
  }

  disminuirCalificacion() {
    if (this.contenido.calificacion > 0) {
      this.contenido.calificacion -= 1;
    }
  }
}
