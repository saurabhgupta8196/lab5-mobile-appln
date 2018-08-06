import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.createFormControls();
    this.createForm();
  }
category: string[] = [
    'Drama',
    'Fiction',
    'Sattire '
  ]


  myform: FormGroup;
 
  pName: FormControl;
  pCost: FormControl;
  pCategory: FormControl;


   createFormControls() {
  this.pName= new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]+')]));
   
     this.pCost= new FormControl('', Validators.compose([Validators.required,Validators.pattern('[1-5]')]));

    this.pCategory= new FormControl('',Validators.required);
  }
   

  


 createForm() {
    this.myform = new FormGroup({
     
      pName: this.pName,

      pCost: this.pCost,
    
      pCategory: this.pCategory,
     
    });
  }
  onSubmit(data) {
    if (this.myform.valid) {
     
      console.log("Movie Name :" + data.pName);

      console.log("Movie Rating :" + data.pCost);
    
      console.log("Genre :" + data.pCategory);


    }
  }
}

