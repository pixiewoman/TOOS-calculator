

import { ToosCalculatorService } from './toos-calculator/toos-calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToosCalculatorComponent } from './toos-calculator/toos-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FListComponent } from './f-list/f-list.component';


const routes: Routes = [
  {path: '', component : ToosCalculatorComponent},
  {path:'f-list', component : FListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ToosCalculatorComponent,
    NavbarComponent,
    FListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(routes)    
    
  ],
  providers: [ToosCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
