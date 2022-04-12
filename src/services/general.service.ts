import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Multiplo } from '../interfaces/multiplo';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  data: any;

  constructor(public firestore: Firestore) {}

  /* metodo para obtener los datos de la coleccion */
  public async getData(): Promise<any> {
    const colec: any = collection(this.firestore, 'multiplos');
    var data: Observable<any> = collectionData(colec);

    return data;
  }

  /* metodo para agregar datos en firebase */
  public async addDocument(data: Multiplo) {
    const colection: any = collection(this.firestore, 'multiplos');
    var add = addDoc(colection, data);

    return add;
  }
}
