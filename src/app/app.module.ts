import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SecureComponent } from './secure/secure.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SecureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
