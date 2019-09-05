import { Component, OnInit } from '@angular/core';
import {ColorPickerService} from 'ngx-color-picker';
import {AngularBootstrapToastsService} from 'angular-bootstrap-toasts';

@Component({
  selector: 'app-card-model-c',
  templateUrl: './card-model-c.component.html',
  styleUrls: ['./card-model-c.component.scss']
})
export class CardModelCComponent implements OnInit {

  npcName: string = 'Nombre Apellido';
  characterName: string = 'Nombre del personaje';
  characterOrigin: string = 'Lugar de origen';
  headerImage: string = 'https://via.placeholder.com/118x100';
  characterData = {
    nickname: 'Data',
    age: 'Data',
    genre: 'Data',
    origin: 'Data',
    race: 'Data',
    characterClass: 'Data',
    faction: 'Data'
  };
  extraData: string = "Extra data";


  sectionsContent = [
    {
      name: 'Físico',
      content: 'Descripción 1'
    },
    {
      name: 'Psicología',
      content: 'Descripción 2'
    },
    {
      name: 'Historia',
      content: 'Descripción 3'
    }
  ];

  constructor(public colorPicker: ColorPickerService, public toastService: AngularBootstrapToastsService) { }

  ngOnInit() {
  }


  copyToClipboard() {
    // tslint:disable-next-line:max-line-length
    const template = `<center><div class="tabDC"> <div class="headerTab"> <div class="bgHeader"></div><div class="ava" style="background-image: url(${this.headerImage})!important;"></div><div class="nameTab"><p>${this.npcName}</p></div></div><div class="origen">&diams; ${this.characterName} &diams; ${this.characterOrigin} &diams;</div><div class="optionsTab"> <div class="infoTitle" style="margin-top: 20px; margin-bottom: 15px;">Datos Principales</div><div class="infoText"> <p class="fas fa-cannabis"><span> Apodo: </span><i>${this.characterData.nickname}</i></p><p class="fas fa-cannabis"><span> Edad: </span><i>${this.characterData.age}</i></p><p class="fas fa-cannabis"><span> Género: </span><i>${this.characterData.genre}</i></p><p class="fas fa-cannabis"><span> Origen: </span><i>${this.characterData.origin}</i></p><p class="fas fa-cannabis"><span> Raza: </span><i>${this.characterData.race}</i></p><p class="fas fa-cannabis"><span> Clase: </span><i>${this.characterData.characterClass}</i></p><p class="fas fa-cannabis"><span> Facción: </span><i>${this.characterData.faction}</i></p></div><div class="infoTitle" style="margin-top: 20px; margin-bottom: 15px;">Extras</div><div class="ext">${this.extraData}</div></div><div class="textTab"> <h2>${this.sectionsContent[0].name}</h2> <div class="ingresarTexto">${this.sectionsContent[0].content}</div><h2>${this.sectionsContent[1].name}</h2> <div class="ingresarTexto">${this.sectionsContent[1].content}</div><h2>${this.sectionsContent[2].name}</h2> <div class="ingresarTexto">${this.sectionsContent[2].content}</div></div><div class="origen"><a href="https://www.facebook.com/daquinoblanco">Aquino</a> &copy; Para uso exlusivo en <a href="http://demonic-city.foroactivo.com">Demonic City</a></div></div></center><link rel="stylesheet" href="styles.css">`;
    return template;
  }

  notify(event) {
    this.toastService.showConfirmToast({
      title: 'Portapapeles',
      text:'¡Copiado al portapapeles!',
      showProgressLine:false,
      bodyClass:'bg-dark text-white no-shadow',
      titleClass: 'bg-dark text-white no-shadow',
      closeButtonClass:'bg-dark text-white no-shadow',
      toastClass:'bg-dark text-white no-shadow'}
    );
  }
}
