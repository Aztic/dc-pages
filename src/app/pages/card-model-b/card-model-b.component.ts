import {Component, OnInit} from '@angular/core';
import {ColorPickerService} from 'ngx-color-picker';
import {CardExtraData} from '../../interfaces/interfaces';

const maxDataLength = 8;

@Component({
  selector: 'app-card-model-b',
  templateUrl: './card-model-b.component.html',
  styleUrls: ['./card-model-b.component.scss']
})
export class CardModelBComponent implements OnInit {

  npcName: string = 'Nombre Apellido';
  npcTitle1: string ='Título';
  npcTitle2: string = 'Título';
  npcDescription1: string = 'Descripción 1';
  npcDescription2: string = 'Descripción 2';
  headerImage: string = 'https://via.placeholder.com/520x200';

  cardColor:string = 'white';
  borderColor: string = '#72598e';
  leftBorder:string = `20px solid ${this.borderColor}`;
  extraData: CardExtraData[] = [

  ];

  /**
   * {
   *   content: 'Data content'
   *   backgroundColor: '#ffffff',
   *   textColor: 'white'
   * }
   *
   */

  constructor(public colorPicker: ColorPickerService) { }

  ngOnInit() {
  }

  reBuildBorder(event) {
    this.leftBorder = `20px solid ${this.borderColor}`;
  }

  copyToClipboard() {
    const minifiedData = this.extraData.map(x => {
      return `<div class="datoNpc" style="background:${x.backgroundColor}; color: ${x.textColor}">${x.content}</div>`;
    }).join('');
    // tslint:disable-next-line:max-line-length
    const template = `<center> <div align="center" class="tabNpc"> <div class="contentNpc" style="background-color: ${this.cardColor}!important;border-left:20px solid ${this.borderColor}!important"> <img src="${this.headerImage}" alt=""> <div class="titleNpc"> ${this.npcName}</div><div class="optionsNpc">${minifiedData}</div><div class="npcInfoOne"> <h2 class="titleNpcInfo">${this.npcTitle1}</h2>${this.npcDescription1}</div><div class="npcInfoTwo"> <h2 class="titleNpcInfo">${this.npcTitle2}</h2>${this.npcDescription2}</div></div></div><div class="origen" style="width:580px;margin-left: 128px;background: #72598e;"><a href="https://www.facebook.com/daquinoblanco">Aquino</a> &copy; Para uso exlusivo en <a href="https://demonic-city.foroactivo.com">Demonic City</a></div></center>`;
    
    return template;
  }

  notify(event) {
    alert('¡Copiado al portapapeles!');
  }

  addExtraData() {
    if(this.extraData.length === maxDataLength) {
      alert('¡No puedes añadir más datos!');
    }
    else {
      this.extraData.push({
        content: 'Dato',
        backgroundColor: '#72598e',
        textColor: '#ffffff'
      });
    }
    // Add extra data to the
  }

  deleteExtraData(index) {
    this.extraData.splice(index, 1);
  }
}
