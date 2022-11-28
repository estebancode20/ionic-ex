import { Component, OnInit } from '@angular/core';

/* importamos la libreria Router */
import { Router } from '@angular/router';

/* Importamos el HttpClientModule */
import {HttpClient} from '@angular/common/http';

/*importamos map*/
import { map } from "rxjs/operators";
import { ActionSheetController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  /*declaramos el arreglo users para almacenar los datos del json*/
  users: any = []

  /*declaramos una variable para el usuario que está buscando*/
  searchedUser: any;

  permission: boolean;

  get characters(): any[]{
    return this.storageService.getLocalCharacter;
  }

  constructor(private router: Router, 
              private http: HttpClient,
              private actionSheetCtrl: ActionSheetController,
              private storageService: StorageService) { }

  ngOnInit() {
    
    /*mostrará el ion-list cuando tenga estos servicios*/
    this.permission = true;
    console.log("hoola");
    this.getUser().subscribe(res=>{
      console.log("Res",res)
      /* Al almacenar los datos del json en users, podemos hacer uso de eso en el html*/
      this.users = res;
      this.searchedUser = this.users;
      
    });

  }

  /*funcion de navegacion de customers a home*/  
  goToHome(){
    this.router.navigate(['/home'])

  }

  /* Funcion para retornar el archivo customers.json */
  getUser(){
    return this.http
    .get("assets/files/customers.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }


  /* Funcion para busqueda de usuario */
  searchCustomer(event){
    const text = event.target.value; 
    this.searchedUser = this.users;
    if (text && text.trim() != '' ){
      this.searchedUser = this.searchedUser.filter((user:any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1); 
      })

    }

  }

  addFavorites(user: any){
    this.storageService.saveRemoveCharacter(user);
  }

  async openMenu(user: any){

    const characterInFavorite = this.storageService.characterInFavorite(user);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: characterInFavorite ? 'Remover de Favoritos' : 'Favoritos',
          icon: characterInFavorite ? 'heart' : 'heart-outline',
          handler : () => this.addFavorites(user)
        }, 
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }


}
