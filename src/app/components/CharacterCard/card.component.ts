import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() character: Character

  getId(url: string) {
    return url.slice(url.length - 3, url.length).replaceAll('/', '').replace('.jpg', '')
  }
}
