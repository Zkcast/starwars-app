import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/data-handler/people/people.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    private PeopleService: PeopleService,
  ) { }

  private currentPage: number = 1
  public loading: boolean = false
  public people: Character[]
  public allPeople: Character[] | null


  ngOnInit(): void {
    this.setPeople(this.currentPage)
    this.PeopleService.getPeople$.subscribe((res: any) => { this.people = res.results; console.log(res.results) })
  }


  // Fill arrays

  setPeople(page: number) {
    this.PeopleService.setPeople(page)
  }

  setAllPeople() {
    this.loading = true;
    this.PeopleService.setAllPeople().then(() => {
      this.PeopleService.getAllPeople$.subscribe(res => { this.allPeople = res; })
      this.loading = false;
    });
  }

  cleanPeople() {
    this.PeopleService.cleanAllPeople()
    this.allPeople = null
  }


  // Pagination

  handleNext() {
    if (this.people.length < 10) return
    this.currentPage++
    this.setPeople(this.currentPage)
  }

  handlePrevious() {
    if (this.currentPage === 1) return
    this.currentPage--
    this.setPeople(this.currentPage)
  }

  allowBack() {
    return !(this.currentPage === 1)
  }

  allowFoward() {
    return !(this.people?.length < 10)
  }

}
