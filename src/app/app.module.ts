import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
