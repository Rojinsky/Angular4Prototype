import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {
 producto:any=undefined;
  cod: string = undefined
  constructor(private route:ActivatedRoute,
  private _ps:ProductosService) {
route.params.subscribe(parametros=>{
  
  //console.log(parametros['id']);
  _ps.cargar_product(parametros['id'])
  .subscribe(res=>{
    this.cod = parametros['id']
    this.producto=res.json();
    console.log(this.producto);
  });
})

   }


}
