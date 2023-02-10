import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/CharacterDetail/character-detail.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
