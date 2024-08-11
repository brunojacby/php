import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Configura o roteamento
    AppComponent, // Adiciona o AppComponent standalone aqui
  ],
  providers: [provideHttpClient()],
})
export class AppModule {}
