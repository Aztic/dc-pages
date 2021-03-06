import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardModelAComponent } from './pages/card-model-a/card-model-a.component';
import {HomeComponent} from './pages/home/home.component';
import {CardModelBComponent} from './pages/card-model-b/card-model-b.component';
import {CardModelCComponent} from './pages/card-model-c/card-model-c.component';
import {CardListComponent} from './pages/card-list/card-list.component';
import {CardModelDComponent} from './pages/card-model-d/card-model-d.component';
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
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'card-list',
    component: CardListComponent,
    data: {animation: 'Card-List'}
  },
  {
    path: 'card-model-a',
    component: CardModelAComponent,
    data: {animation: 'Card'}
  },
  {
    path: 'card-model-b',
    component: CardModelBComponent,
    data: {animation: 'Card'}
  },
  {
    path: 'card-model-c',
    component: CardModelCComponent,
    data: {animation: 'Card'}
  },
  {
    path: 'card-model-d',
    component: CardModelDComponent,
    data: {animation: 'Card'}
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
