import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  collectionProductos : Producto[] = []; //creamos collection basada en interfaz

  productoSeleccionado ! : Producto // ! -> recibir valores vacios

  modalVisibleProdcuto: boolean = false;

  //modalVisible: boolean =false;
  // eliminarVisible:  false;
  //
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required),

  })
  constructor(public servicioCrud: CrudService){ }// patentamos servicio de forma local

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
     this.collectionProductos = producto;
    })
  }

  async agregarProducto(){ //metodo para validar esos valores del producuto
  if(this.producto.valid){
    let nuevoProducto: Producto ={
      idProducto: '',
      nombre:this.producto.value.nombre!,
      imagen:this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!
    };
    //llamamos al servicioCrud; funcion craerProducto; seteamos nuevoProducto
    await this.servicioCrud.crearProducto(nuevoProducto)
    .then(producto => {
      alert("ha agregado un nuevo producto con 'exito :)");
    })
    .catch(error =>{
      alert("hubi un error al cargar nuevo producto :( \n" + error);
    })
  }
  }
  //Editar Producto -> Vincula al modal de editar
  mostrarEditar(productoSeleccionado:Producto){
    this.productoSeleccionado = productoSeleccionado;

    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      categoria: productoSeleccionado.categoria

    })
  }
  //VINCULA EL BOTON "GUARDA CAMBIOS"
  editarProducto(){
    let datos: Producto= {
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria:this.producto.value.categoria!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto =>{
      alert("El producto fue modificado con exito.");
    })
    .catch(error =>{
      alert("No se puedo modificar el producto /n"+error);
    })
  }
  //ELIMINAR PRODUCTO
  mostrarBorrar(productoSeleccionado : Producto){
    this.modalVisibleProdcuto = true;
    this.productoSeleccionado = productoSeleccionado;
  }
  borrarProducto(){
    this.servicioCrud.eliminarProdcto(this.productoSeleccionado.idProducto)
    .then(respuesta =>{
      alert("El producto se ha eliminado correctamente");
    })
    .catch(error =>{
      alert("No se ha podido eliminar el producto: /n"+error)
    })
  }
}
