import { Injectable } from '@angular/core';
import { Cine, Sala } from './cines.model';

@Injectable({
  providedIn: 'root',
})
export class CinesService {
  private cines: Cine[];
  private salas: Sala[];

  constructor() {
    this.salas = [
      { id: 0, nombre: 'America' },
      { id: 1, nombre: 'Europa' },
      { id: 2, nombre: 'Asia' },
      { id: 3, nombre: 'Africa' },
      { id: 4, nombre: 'Oceania' },
    ];
    this.cines = [];
  }
  getSalas() {
    return this.salas;
  }
  getCines() {
    return this.cines;
  }
  agregarCine(cines: Cine) {
    this.cines.push(cines);
  }
  nuevoCine(): Cine {
    return {
      id: this.cines.length,
      nombre: '',
      provincia: '',
      direccion: '',
      codigoPostal: this.cines.length,
      telefono: this.cines.length,
      sala: this.cines.length,
    };
  }
}
