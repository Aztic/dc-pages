import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  routes = [
    {
      name: 'Modelo ficha 1',
      route: '/card-model-a'
    },
    {
      name: 'Modelo ficha 2',
      route: '/card-model-b'
    },
    {
      name: 'Modelo ficha 3',
      route: '/card-model-c'
    },
    {
      name: 'Modelo ficha 4 (mascota)',
      route: '/card-model-d'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
