import { Component, OnInit } from '@angular/core';

/* importamos la libreria Router */
import { Router } from '@angular/router';

/* Importamos el HttpClientModule */
import { HttpClient } from '@angular/common/http';

/*importamos map*/
import { map } from "rxjs/operators";

/*importamos toastcontroller*/
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  /* declaramos el objeto arreglo cities*/

  token = localStorage.getItem("token");
  cities: any = [];

  constructor(private route: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    console.log("token:", this.token)
    this.getCities().subscribe(res => {
      console.log("Res", res)
      this.cities = res;
    });
  }

  getCities() {
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }


  /* el toast es un mensaje sin interaccion, a diferencia del alert donde el usuario si interactua con el mensaje */
  async presentToast1() {
    const toast = await this.toastController.create({
      message: "No se puede agrandar más la imagen",
      duration: 2000,
      position: "middle"

    });
    toast.present()

  }

  /* 1er mensaje con interaccion */
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "Se ha borrado la ciudad correctamente",
      buttons: ["OK"],

    });

    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);

  }



  /* 2do mensaje con interaccion */
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estás seguro de borrar la ciudad?",
      buttons: [
        {

          text: "No",
          handler: () => {
            console.log("No cancel")
          }
        },
        {

          text: "Si",
          handler: () => {
            console.log("Ciudad eliminada")

          }
        }
      ]
    });

    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);

  }
}
