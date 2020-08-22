import { Injectable } from '@angular/core';
import { DATA } from '../../assets/data/mentores';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  private carreras = DATA;

  constructor() { }

  getCarreras() {
    return this.carreras;
  }

  getCarreaById( id: string) {
    return this.carreras[id];
  }

}
