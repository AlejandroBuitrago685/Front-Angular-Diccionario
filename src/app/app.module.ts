import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EspanolIndexComponent } from './Components/Espanol/espanol-index/espanol-index.component';
import { AddModalComponent } from './Components/Espanol/add-modal/add-modal.component';
import { InglesIndexComponent } from './Components/Ingles/ingles-index/ingles-index.component';
import { GlobalErrorComponent } from './ErrorHandling/global-error/global-error.component';
import { MyInterceptor } from './Interceptores/Interceptor';
import { GlobalErrorHandlingService } from './ErrorHandling/error-handling.service';
import { AddEnglishComponent } from './Components/Ingles/add-english/add-english.component';
import { EspanolCardComponent } from './Components/Espanol/espanol-card/espanol-card.component';

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
    EspanolCardComponent
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
