import { Component, OnInit } from '@angular/core';
import { CinesService } from '../cines.service';
import { Cine, Sala } from '../cines.model';

@Component({
  selector: 'app-listado-cines',
  templateUrl: './listado-cines.component.html',
  styleUrls: ['./listado-cines.component.css'],
})
export class ListadoCinesComponent implements OnInit {
  cines!: Cine[];
  constructor(private cinesService: CinesService) {}

  ngOnInit() {
    this.cines = this.cinesService.getCines();
  }
}
