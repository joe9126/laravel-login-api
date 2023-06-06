import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,


  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
