import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardModelAComponent } from './pages/card-model-a/card-model-a.component';
import {HomeComponent} from './pages/home/home.component';
import {CardModelBComponent} from './pages/card-model-b/card-model-b.component';
import {CardModelCComponent} from './pages/card-model-c/card-model-c.component';
import {CardListComponent} from './pages/card-list/card-list.component';
/*
const routes: Routes = [
  {
    path: '',
    component: ''
  },
  {
    path: '',
    loadChildren: ''
  }
];
*/
const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'card-list',
    component: CardListComponent
  },
  {
    path: 'card-model-a',
    component: CardModelAComponent
  },
  {
    path: 'card-model-b',
    component: CardModelBComponent
  },
  {
    path: 'card-model-c',
    component: CardModelCComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
