import { RouterModule, Routes } from "@angular/router";
import { 
    AboutComponent,
    ProductComponent,
    ContactComponent,
    MainComponent
 } from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: MainComponent},
    { path: 'Contact', component: ContactComponent },
    { path: 'Product', component: ProductComponent },
    { path: 'About', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true});