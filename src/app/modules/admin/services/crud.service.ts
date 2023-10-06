import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import{map} from 'rxjs/operators' //MAPEA VALORES -> similar a la funcion de cada arreglo

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosColletion: AngularFirestoreCollection<Producto>
  constructor( private database: AngularFirestore) {
    this.productosColletion = database.collection('productos')
   }

   //CRUD ->  PRODUCTOS
   crearProducto(producto: Producto){
    return new Promise(async(resolve, reject) =>{
      try{
        //creamos constante que guarde un nuevo ID
        const idProducto = this.database.createId();

        //se lo asignamos al atributo ID de la interfaz Prducto
        producto.idProducto = idProducto;

        const resultado = await  this.productosColletion.doc(idProducto).set(producto)

        resolve(resultado);
      }catch (error){ //CATCH -> captura posibles errorres
        reject(error) // muestra el error
      }
    })
   }
   obtenerProducto() {
    //SNAPSHOTCHANGES -> captura del estado de los datos
    //PIPE -> tuberia por donde pasan los datos (retorna el nuevo arreglo)
    //MAP -> "mapea" o recorre la nueva informacion y la envia
    // A -> resguarda la  nueva informacion y la envia
     return this.productosColletion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
   }
   modificarProducto(idProducto:string,nuevaData:Producto){
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
   }
}

