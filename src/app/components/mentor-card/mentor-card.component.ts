import { Component, OnInit , Input} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss']
})
export class MentorCardComponent implements OnInit {

  @Input() mentor: any = [];
  @Input() index: number;
  constructor( private router: Router) { }

  ngOnInit(): void {
    console.log(this.mentor);
    
  }

  showMentor() {
    return this.router.navigate(['/mentor', this.index]);
  }
}
