

import { ToosCalculatorService } from './toos-calculator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-toos-calculator',
  templateUrl: './toos-calculator.component.html',
  styleUrls: ['./toos-calculator.component.css']
})

export class ToosCalculatorComponent implements OnInit {
  form = new FormGroup( {
    location: new FormControl('', Validators.required),
    equipment : new FormControl (''),
    refrigerant : new FormControl(''),
    weight : new FormControl('', Validators.required),
    
    
  })
  constructor(private toosService: ToosCalculatorService) {
    this.refrigerants = toosService.refrigerants;
   }
  
   tablica = [];
  
  
  
  ngOnInit() {
  }

get location () {
return this.form.get('location');
}

refrigerants : any;
calculation : number;
name : any;


calculate(){
  
   this.calculation = +this.form.get('refrigerant').value * +this.form.get('weight').value;
   
  

}
selectChange(args){
  this.name = args.target.options[args.target.selectedIndex].text; 

}




onSubmit(formValue:any){
  formValue['name'] = this.name;

  
  this.tablica.push(formValue);
   
    console.log(this.tablica);
    
    
   
}
onDelete(index){
  this.tablica.splice(index,1);

}


}
