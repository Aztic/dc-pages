import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-card-model-a',
  templateUrl: './card-model-a.component.html',
  styleUrls: ['./card-model-a.component.scss']
})
export class CardModelAComponent implements OnInit {

  npcName: string = 'Nombre Apellido';
  npcDescription: string = 'Descripción del personaje';
  headerImage: string = 'https://via.placeholder.com/520x200';

  cardColor:string = 'white';
  borderColor: string = '#0000ff';
  leftBorder:string = `20px solid ${this.borderColor}`;

  constructor(public colorPicker: ColorPickerService) { }

  ngOnInit() {
  }

  reBuildBorder(event) {
    this.leftBorder = `20px solid ${this.borderColor}`;
  }

  onCardClick() {

  }

  copyToClipboard() {
    return 'A pos funciona xdxd';
  }

  notify(event) {
    alert('Copiado al portapapeles!');
  }

}
