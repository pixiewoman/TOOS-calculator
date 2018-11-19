import { ToosCalculatorService } from './toos-calculator/toos-calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToosCalculatorComponent } from './toos-calculator/toos-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToosCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToosCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
