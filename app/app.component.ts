import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // We will need to import a couple of specific API’s for dealing with reactive forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})


export class AppComponent  { 

   onSubmit(value:any){
    console.log(value);
    }
 }
