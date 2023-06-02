import { Component } from '@angular/core';
import { ClientesService } from './../clientes.service';
@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css'],
})
export class AltaClienteComponent {
  constructor(private clientesService: ClientesService) {}
}
