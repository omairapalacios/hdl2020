import { Injectable } from '@angular/core';
import { DATA } from '../../assets/data/mentores';
import { Mentor } from '../interfaces/mentor'

@Injectable({
  providedIn: 'root'
})
export class MentoresService {
  private mentores: Mentor[] = DATA;

  constructor() {
  }

  getMentores() {
    return this.mentores;
  }

  getMentoresById( id: string) {
    return this.mentores[id];
  }

  searchMentores( text: string ){
    const mentoresArr: Mentor[] = [];
    text = text.toLowerCase();
    for (let i = 0; i < this.mentores.length; i++) {
    const mentor = this.mentores[i];
    const alias = mentor.alias.toLowerCase();

    if ( alias.indexOf( text ) >= 0 ) {
        mentor.id = i;
        mentoresArr.push( mentor );
      }
  }
    return mentoresArr;
  }

/*   searchCharacter( text: string ){
    const charactersArr: Characters[] = [];
    text = text.toLowerCase();
    for (const character of this.characters ) {
      const alias = character.alias.toLowerCase();
      const nombre = character.nombre.toLowerCase();
      if ( alias.indexOf( text ) >= 0 || nombre.indexOf( text ) >= 0 )  {
        charactersArr.push( character );
      }
    }
    return charactersArr;
  } */
}
