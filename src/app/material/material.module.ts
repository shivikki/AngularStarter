import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
const materialCom=[
  MatButtonModule,
  MatSidenavModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports:[
    MatButtonModule 
  ]
})
export class MaterialModule { }
