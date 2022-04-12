import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

declare var document: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data: any = [];

  constructor(private _general: GeneralService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    var data = await this._general.getData();

    data.subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }

  validateColor(data: any) {
    console.log(data);
    /* se toma el primero valor del array para saber que colo debe ir */
    /* multiplos de 3 en verde */
    /* multiplos de 5 en rojo */
    /* multiplos de 7 en azul */
    if (data.multiplos[0] == 3) {
      document.getElementById('selection-list').style.color = 'green';
    }
    if (data.multiplos[0] == 5) {
      document.getElementById('selection-list').style.color = 'red';
    }
    if (data.multiplos[0] == 7) {
      document.getElementById('selection-list').style.color = 'blue';
    }
  }
}
