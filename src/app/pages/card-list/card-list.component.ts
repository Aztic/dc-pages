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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
