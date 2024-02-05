import { Component, OnInit } from '@angular/core';
import { Contenido } from '../../models/contenido';
import { ContenidoService } from '../../services/contenido.service';
import { tipoContenido } from '../../models/tipo_contenido';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']  // Corregir la propiedad a styleUrls
})
export class ListVideoComponent implements OnInit {
  contenidos: Contenido[] = [];

  constructor(private contenidoService: ContenidoService) {}

  ngOnInit(): void {
    this.contenidos = this.contenidoService.getContenido();
  }

  
  
}
