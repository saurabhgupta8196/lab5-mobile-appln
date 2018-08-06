import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';

import { RouterModule,Routes} from '@angular/router';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes=[
  {path :'add',component: AddComponent},
  {path :'search',component: SearchComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
