import { Component,OnInit } from '@angular/core';
//IMPORTAMOS NUESTRA INTERFAZ
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //PROPIEDAD PUBLICA (TIPO ARRAY)
  public info:Perro[];

  //INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id:"",
        raza:"Tarjeta 1",
        descripcion:"Foto de un  perro Pastor Aleman en pleno crecimiento",
        imagen:"https://www.residenciacaninadebureba.com/wp-content/uploads/2019/09/cachorro-pastor-aleman-atento.jpg",
        alt:"Pastor Aleman"
      },
      {
        id:"",
        raza:"Tarjeta 2",
        descripcion:"Foto de un Golden",
        imagen:"http://todaslasrazasdeperros.net/wp-content/uploads/2020/03/golden-retriever-1827899_1920.jpg",
        alt:"Golden"
      }
    ]
  }

  //EVENTO DE CONTRUCCION INICIALIZACION
 ngOnOnit(): void{


}
}
