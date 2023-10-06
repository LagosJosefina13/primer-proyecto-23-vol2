import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  //referenciar Autentificacion de Firebase
  constructor (public auth: AngularFireAuth){ }
   
   //funcion para el inicio de sesión
   iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
   }
   cerrarSesion(){
    //devuelve una promesa vacia
    return this.auth.signOut();
   }

   //funcion  para retornar nueva informacion para nombre y contraseña
   registrar (nombre: string, contrasena: string) {
    //retorna nueva informacion  de registrar
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena);
  }

  //funcion asincronica paa tomar UID
  async getUid(){

    //CURRENTUSER -> JUNTO A LA PROMESA, GENERA 
   const user = await this.auth.currentUser;

   if(user == null){
    return null;
   }else{
    return user.uid;
   }
  }
}
