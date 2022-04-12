import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { Multiplo } from '../../interfaces/multiplo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  numero: number = 0;

  resultado: any = {
    numeros: [],
    class: 'none',
  };

  constructor(private _general: GeneralService) {}

  ngOnInit() {}

  generateMulti() {
    this.isLoading = true;
    console.log(this.numero);

    /* variable donde alamacenaremos los multiplos que entran en mi numero principal */
    /* si es multiplo se hace un push al array y se agrega el nuevo elemento */
    var numeros: Array<Number> = [];

    if (this.numero % 3 == 0) {
      numeros.push(3);
    }
    if (this.numero % 5 == 0) {
      numeros.push(5);
    }
    if (this.numero % 7 == 0) {
      numeros.push(7);
    }

    /* ordenamos el array*/
    numeros.sort();

    /* se toma el primero valor del array para saber que colo debe ir */
    /* multiplos de 3 en verde */
    /* multiplos de 5 en rojo */
    /* multiplos de 7 en azul */

    if (numeros[0] == 3) {
      this.resultado.class = 'success';
    }
    if (numeros[0] == 5) {
      this.resultado.class = 'danger';
    }
    if (numeros[0] == 7) {
      this.resultado.class = 'blue';
    }

    this.resultado.numeros = numeros;

    /* agregamos la peticiona  firebase con el mtodo addDocument de nuestro servicio */
    var model: Multiplo = {
      numero: this.numero,
      multiplos: numeros,
      creation: new Date(),
    };
    this._general.addDocument(model).then((res: any) => {
      this.isLoading = false;
    });
  }
}
