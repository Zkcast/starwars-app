import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodsService {

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<Character[]> {
    return this.http.get<any>(
      `${environment.urlbase}/people/?page=${page}`
    );
  }

  getPeopleById(id: string): Observable<Character> {
    return this.http.get<Character>(
      `https://swapi.dev/api/people/${id}`
    )
  }

}
