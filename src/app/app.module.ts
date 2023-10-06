import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES 
import { SharedModule } from './shared/shared.module';
//FIREBASE
//NOs conectamos con la BD,  nos trae los modulos necesarios
import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat';// CLOUD FIRETORE
import{AngularFireAuthModule} from '@angular/fire/compat/auth';//AUTENTIFICACION
import{AngularFireStorageModule} from '@angular/fire/compat/storage';//ALMACENAMIENTO DE IMAGENES


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //CONFIGURACION DE modulos FIREBASE
    AngularFireModule .initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
