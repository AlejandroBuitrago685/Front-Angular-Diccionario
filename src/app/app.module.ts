import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './FRONT-Diccionario/Componentes Generales/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './FRONT-Diccionario/Componentes Generales/header/header.component';
import { FooterComponent } from './FRONT-Diccionario/Componentes Generales/footer/footer.component';
import { EspanolIndexComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/espanol-index/espanol-index.component';
import { AddModalComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/add-modal/add-modal.component';
import { InglesIndexComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/ingles-index/ingles-index.component';
import { GlobalErrorComponent } from './FRONT-Diccionario/ErrorHandling/global-error/global-error.component';
import { MyInterceptor } from './FRONT-Diccionario/Interceptores/Interceptor';
import { GlobalErrorHandlingService } from './FRONT-Diccionario/ErrorHandling/error-handling.service';
import { AddEnglishComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/add-english/add-english.component';
import { EspanolCardComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/espanol-card/espanol-card.component';
import { FiltroEspanolPipe } from './FRONT-Diccionario/Pipes/filtro.pipe';
import { UpdateModalEspanolComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/update-modal-espanol/update-modal-espanol.component';
import { InglesCardComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/ingles-card/ingles-card.component';
import { UpdateModalInglesComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/update-modal-ingles/update-modal-ingles.component';
import { LoginComponent } from './FRONT-Diccionario/Auth/login/login.component';
import { RegisterModalComponent } from './FRONT-Diccionario/Auth/register-modal/register-modal.component';
import { LoaderComponent } from './FRONT-Diccionario/Componentes Generales/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    EspanolIndexComponent,
    AddModalComponent,
    InglesIndexComponent,
    GlobalErrorComponent,
    AddEnglishComponent,
    EspanolCardComponent,
    FiltroEspanolPipe,
    UpdateModalEspanolComponent,
    InglesCardComponent,
    UpdateModalInglesComponent,
    LoginComponent,
    RegisterModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorHandlingService}],
    bootstrap: [AppComponent]
})
export class AppModule { }
