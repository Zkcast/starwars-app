import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
   @Input() character: Character
   
  getLink(url: string) {
    let id = url.slice(url.length - 3, url.length).replaceAll('/', '').replace('.jpg', '')
    window.open(`https://starwars-visualguide.com/#/characters/${id}`, '_blank');
  }

  getImageURL(url: string) {
    let id = url.slice(url.length - 3, url.length).replaceAll('/', '').replace('.jpg', '')
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }

}
