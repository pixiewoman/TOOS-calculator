import { Injectable } from '@angular/core';

@Injectable()
export class ToosCalculatorService {
  
    refrigerants = [
    {id : 1, name :"R407C", value: 34.6},
    {id : 2, name :"R404A", value : 45},
    {id : 3, name : "R10A", value : 78}
    ]
    
  constructor() { }

}
