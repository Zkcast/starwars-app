import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpmethodsService } from 'src/app/services/http-methods/httpmethods.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  charId: string | null;
  currentChar: Character;

  constructor(private route: ActivatedRoute, private http: HttpmethodsService) {}

  ngOnInit() {
    
    this.charId = this.route.snapshot.paramMap.get('id');
    if (this.charId) this.http.getPeopleById(this.charId).subscribe((res: Character) => this.currentChar = res)

  }

}
