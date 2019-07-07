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
    // tslint:disable-next-line:max-line-length
    const template = `<center><div class="tabNpc"> <div class="contentNpc" style="background-color: ${this.cardColor}!important;border-left: ${this.borderColor}!important"> <img src="${this.headerImage}" alt=""> <div class="titleNpc"> ${this.npcName}</div><div class="guideTab"> ${this.npcDescription} </div></div><div class="origen" style="width:580px;margin-left: 128px;background: #72598e;"><a href="https://www.facebook.com/daquinoblanco">Aquino</a> &copy; Para uso exlusivo en <a href="http://demonic-city.foroactivo.com">Demonic City</a></div></center>`;

    return template;
  }

  notify(event) {
    alert('¡Copiado al portapapeles!');
  }

}
