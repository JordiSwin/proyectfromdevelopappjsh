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
  contenido!: Contenido;
  tipoContenido: tipoContenido[] = [];

  constructor(private contenidoService: ContenidoService) {}

  ngOnInit(): void {
    
    this.contenido = this.contenidoService.nuevoContenido();  
    this.tipoContenido = this.contenidoService.getTiposcontenido();
  }

  insertarContenido() {
   
    this.contenidoService.AgregarContenido(this.contenido); 
    this.contenido = this.contenidoService.nuevoContenido();  
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
