import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Proveedor1Provider } from 'src/providers/proveedor1/proveedor1';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {

  usuarios

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider) { }

  ngOnInit() {
  
    this.ionViewDidLoad();

  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data) => {this.usuarios = data},
      (error) => {console.log(error);}
    )

  }

}
