import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargadaSobre: boolean = false;
equipo:any[]=[];

  constructor( public http:Http ) {

    this.carga_infor();
    this.carga_sobre_nosotros();
   }

   public carga_infor(){
     this.http.get("assets/data/info.pagina.json")
       .subscribe(data => {
         // console.log(data.json());
         this.cargada = true;
         this.info = data.json();
       })
   }
  public carga_sobre_nosotros(){
    this.http.get("https://elprimero-92dee.firebaseio.com/equipo.json")
      .subscribe(data => {
        //console.log(data.json());
        this.cargadaSobre = true;
        this.equipo = data.json();
      }) 
  }
}
