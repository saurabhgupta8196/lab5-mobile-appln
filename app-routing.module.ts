import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component'
import {SearchComponent} from './search/search.component'
const routes: Routes = [
  { path: 'add', component: AddComponent },
   { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {


  
}