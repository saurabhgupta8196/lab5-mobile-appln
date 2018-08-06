import { Component, OnInit } from '@angular/core';

//addede items to serach component
import { DataStruct } from '../DataStruct';
import { UserService } from '../user.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Validators, FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { show } from '../show';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public shows: show[] = [];

  searchForm: FormGroup;

  category = "";
  mcategoryrequired: string;
  pCategory: FormControl;


  public datalist: DataStruct[] = [];
  constructor(private user: UserService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.user.getData().subscribe(data => this.datalist = data);
  }

  createFormControls() {
    this.pCategory = new FormControl('', Validators.required);
  }

  createForm() {
    this.searchForm = new FormGroup({
      pCategory: this.pCategory,
    })
  }


  onSubmit(): void {
 this.shows.splice(0, this.shows.length)
    for (let i of this.datalist) {
      console.log(i.pCategory);
      console.log(this.pCategory.value);
      if (i.pCategory == this.pCategory.value) {
        this.shows.push(i);
  }


   
      
    }
  }

}
