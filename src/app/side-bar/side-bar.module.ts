import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [SideBarComponent],
  exports: [SideBarComponent]
})
export class SideBarModule { }
