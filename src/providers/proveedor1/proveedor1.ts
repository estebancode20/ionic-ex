import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';





@Injectable()

export class Proveedor1Provider{

    constructor(public http: HttpClient){
        console.log('hello Proveedor1Provider Provider ')
    }

    obtenerDatos(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');

    }
}