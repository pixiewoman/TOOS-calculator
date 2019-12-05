import { Injectable } from '@angular/core';

@Injectable()
export class ToosCalculatorService {
  
    refrigerants = [
    {id : 1, name :"SF6", GWP: 22.800},
    {id : 2, name :"R23", GWP : 14.800},
    {id : 3, name : "R143A", GWP : 4.470},
    {id : 4, name : "R507A", GWP : 3.985},
    {id : 5, name : "R404A", GWP : 3.922},
    {id : 6, name : "R428A", GWP : 3.607},
    {id : 7, name : "R125", GWP : 3.500},
    {id : 8, name : "R434A", GWP : 3.245},
    {id : 9, name : "R227ea", GWP : 3.220},
    {id : 10, name : "R422A", GWP : 3.143},
    {id : 11, name : "R22D", GWP : 2.729},
    {id : 12, name : "R417A", GWP : 2.346},
    {id : 13, name : "R423A", GWP : 2.280},
    {id : 14, name : "R438A", GWP : 2.264},
    {id : 15, name : "R427A", GWP : 2.138},
    {id : 16, name : "R407A", GWP : 2.107}
    ]
  
    
  constructor() { }

}
