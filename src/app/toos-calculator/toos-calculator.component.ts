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
    refrigerant : new FormControl(''),
    weight : new FormControl('', Validators.required),
    equivalent : new FormControl('56')
  })
  constructor(service: ToosCalculatorService) {
    this.refrigerants = service.refrigerants;
   }

  ngOnInit() {
  }

get location () {
return this.form.get('location');
}

refrigerants;
calculation;

t(){
  
   this.calculation = this.form.get('refrigerant').value*this.form.get('weight').value);
}



}


