import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-model-d',
  templateUrl: './card-model-d.component.html',
  styleUrls: ['./card-model-d.component.scss']
})
export class CardModelDComponent implements OnInit {

  constructor() { }
  characterImage: string = 'https://via.placeholder.com/187x470';
  innerCharacterImage: string = 'https://via.placeholder.com/150x150';
  petImage: string = 'https://via.placeholder.com/187x470';
  alwaysVisible: boolean = false;
  petSide: boolean = false;
  characterName: string = 'Nombre completo';
  characterDescriptions = [
    {
      title: 'Descripción física',
      value: ''
    },
    {
      title: 'Descripción psicológica',
      value: ''
    },
    {
      title: 'Historia',
      value: ''
    },
    {
      title: 'Extra',
      value: ''
    },
  ];
  petDescriptions = [
    {
      title: 'Descripción física',
      value: ''
    },
    {
      title: 'Descripción psicológica',
      value: ''
    },
    {
      title: 'Historia',
      value: ''
    },
    {
      title: 'Extra',
      value: ''
    },
  ];
  characterExtraData = [
    {value:'Dato 1'},
    {value:'Dato 2'},
    {value:'Dato 3'},
    {value:'Dato 4'},
    {value:'Dato 5'},
    {value:'Dato 6'}
  ];

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/pet-card.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  copyToClipboard() {
    let parsedCharacterDescriptions = this.characterDescriptions.map(des => {
      return `<p class="title">${des.title}</p><p>${des.value}</p>`;
    }).join('');
    let parsedPetDescriptions = this.petDescriptions.map(des => {
      return `<p class="title">${des.title}</p><p>${des.value}</p>`;
    }).join('');
    let parsedExtraData = this.characterExtraData.map(dat => {
      return `<div class="extra-data">${dat.value}</div>`;
    }).join('');
    // tslint:disable-next-line:max-line-length
    const template = `<div class="character-pet-card"> <div class="image-side"> <div class="image-side-inner"> <div class="character-image inside-image"> <div class="main-image" style="background:url(${this.characterImage})"></div><div class="overlay"></div><div class="character-hover"> <div class="inner-image" style="background: url(${this.innerCharacterImage})"> </div><div class="main-name">${this.characterName}</div>${parsedExtraData}</div></div><div class="pet-image inside-image" style="background: url(${this.petImage})"> </div></div></div><div class="info-side"> <div class="selector-menu"> <div class="character-selector menu-selector active">Personaje</div><div class="pet-selector menu-selector">Mascota</div></div><div class="character-section section active"> ${parsedCharacterDescriptions}</div><div class="pet-section section"> ${parsedPetDescriptions}</div></div><div class="copyright"> Copyright &copy <a href="https://github.com/Aztic">Aztic</a> 2019 </div></div>`;
    return template;
  }

  notify(event) {
    alert('¡Copiado al portapapeles!');
  }

}
