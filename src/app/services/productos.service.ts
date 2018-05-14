import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class ProductosService {
productos:any[]=[];
cargandoProd:boolean=true;
  constructor(private http:Http) { 
    this.cargar_productos();
  }
  public cargar_productos(){
    
      this.http.get('https://elprimero-92dee.firebaseio.com/productos_idx.json')
      .subscribe(res=>{
        console.log(res.json());
        this.cargandoProd=false;
      })
  }
}

