import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MentoresService} from '../../services/mentores.service'
import { Mentor } from 'src/app/interfaces/mentor';
@Component({
  selector: 'app-mentores',
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.scss']
})
export class MentoresComponent implements OnInit {


  mentores: Array<Mentor> = [];

  constructor(
    private mentoresService: MentoresService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mentores = this.mentoresService.getMentores();
  }

  showMentor( id: number) {
    return this.router.navigate(['/mentor', id]);
  }
}
