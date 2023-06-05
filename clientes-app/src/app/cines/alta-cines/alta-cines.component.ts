import { Component, OnInit } from '@angular/core';
import { CinesService } from './../cines.service';
import { Cine, Sala } from './../cines.model';
@Component({
  selector: 'app-alta-cines',
  templateUrl: './alta-cines.component.html',
  styleUrls: ['./alta-cines.component.css'],
})
export class AltaCinesComponent implements OnInit {
  cines: any;

  salas: any;

  constructor(private cinesService: CinesService) {}

  ngOnInit() {
    this.salas = this.cinesService.nuevoCine();
    this.cines = this.cinesService.getCines();
  }

  nuevoCine(): void {
    this.cinesService.agregarCine(this.cines);
    this.cines = this.cinesService.nuevoCine();
  }
}
