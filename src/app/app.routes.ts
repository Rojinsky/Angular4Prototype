import { RouterModule, Routes } from "@angular/router";
import { 
    AboutComponent,
    ProductComponent,
    ContactComponent,
    MainComponent,
    BuscarComponent
 } from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: MainComponent},
    { path: 'Contact', component: ContactComponent },
    { path: 'Product/:id', component: ProductComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true});