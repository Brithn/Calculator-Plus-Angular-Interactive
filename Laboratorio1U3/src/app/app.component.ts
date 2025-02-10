import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Laboratorio1U3';


  ngOnInit(): void {
    // let calculator = new Calculator();
    // let numero1 = 4;

    // let numero3 = 6;
    // let numero4= 2;


    // let multiply = calculator.multiply(numero1,3);
    // let result = calculator.divide(numero3,numero4);
    // console.log(result === 12);
    // console.log(result !== 9);
    // console.log(result === 3);
    // console.log(result !== 34);

  }


}
