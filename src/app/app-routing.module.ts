import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  // { path: 'second-component', component: SecondComponent },
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
