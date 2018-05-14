import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class ProductosService {
productos:any[]=[];
cargandoProd:boolean=true;
  constructor(private http:Http) { 
    this.cargar_productos();
  }

  /**
   * cargar_product
   */
  public cargar_product(cod : string) {
    return this.http.get(`https://elprimero-92dee.firebaseio.com/productos/${cod}.json`);
  }
  public cargar_productos(){
    this.cargandoProd = true;
      this.http.get('https://elprimero-92dee.firebaseio.com/productos_idx.json')
      .subscribe(res=>{
        console.log(res.json());
        setTimeout(() => {
          this.cargandoProd = false;
          this.productos = res.json();
        }, 1500);
        
      })
  }
}

