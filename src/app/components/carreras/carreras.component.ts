import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from '../../services/carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {

  carreras = [];

  constructor(
    private carrerasService: CarrerasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carreras = this.carrerasService.getCarreras();
  }
  /* showMentor( id: number) {
    return this.router.navigate(['/mentor', id]);
  } */

}
