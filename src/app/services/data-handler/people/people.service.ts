import { Injectable } from '@angular/core';
import { HttpmethodsService } from '../../http-methods/httpmethods.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpmethodsService) { }




  // Get all people

  private people$ = new BehaviorSubject<Character[]>([]);
  get getPeople$(): Observable<Character[]> { return this.people$.asObservable(); }

  setPeople(page: number): void {
    this.http.getPeople(page).subscribe((res) => this.people$.next(res));
  }

  // Get all people
  private allPeople$ = new BehaviorSubject<Character[]>([]);
  get getAllPeople$(): Observable<Character[]> { return this.allPeople$.asObservable(); }

  currentPage: number = 1
  allPeople: Character[] = []

  setAllPeople(): Promise<void> {

    return new Promise((resolve) => {
      this.http.getPeople(this.currentPage).subscribe((res: any) => {
        this.allPeople = [...this.allPeople, ...res.results];
        this.currentPage++;
        if (res.next !== null) {
          this.setAllPeople().then(() => resolve());
        } else {
          this.allPeople$.next(this.allPeople);
          this.currentPage = 1
          resolve();
        }
      });
    });
  }


  //Clean all people

  cleanAllPeople(): void {
    this.allPeople$.next([])
  }

}

