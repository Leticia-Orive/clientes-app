import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinesService } from './cines.service';
import { AltaCinesComponent } from './alta-cines/alta-cines.component';
import { FormsModule } from '@angular/forms';

import { ListadoCinesComponent } from './listado-cines/listado-cines.component';

@NgModule({
  declarations: [AltaCinesComponent, ListadoCinesComponent],
  imports: [CommonModule, FormsModule],
  providers: [CinesService],
  exports: [AltaCinesComponent, ListadoCinesComponent],
})
export class CinesModule {}
