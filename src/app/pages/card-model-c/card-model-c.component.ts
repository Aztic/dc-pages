import { Component, OnInit } from '@angular/core';
import {ColorPickerService} from 'ngx-color-picker';

@Component({
  selector: 'app-card-model-c',
  templateUrl: './card-model-c.component.html',
  styleUrls: ['./card-model-c.component.scss']
})
export class CardModelCComponent implements OnInit {

  npcName: string = 'Nombre Apellido';
  npcDescription: string = 'Descripción del personaje';
  headerImage: string = 'https://via.placeholder.com/520x200';

  cardColor:string = 'white';
  borderColor: string = '#72598e';
  leftBorder:string = `20px solid ${this.borderColor}`;


  constructor(public colorPicker: ColorPickerService) { }

  ngOnInit() {
  }


  reBuildBorder(event) {
    this.leftBorder = `20px solid ${this.borderColor}`;
  }

  copyToClipboard() {
    // tslint:disable-next-line:max-line-length
    const template = `<center><div class="tabDC"> <div class="headerTab"> <div class="bgHeader"></div><div class="ava" style="background-image: ;"></div><div class="nameTab"><p>Nombre Apellido</p></div></div><div class="origen">&diams; Nombre del Personaje &diams; Lugar de Origen &diams;</div><div class="optionsTab"> <div class="infoTitle" style="margin-top: 20px; margin-bottom: 15px;">Datos Principales</div><div class="infoText"> <p class="fas fa-cannabis"><span> Apodo: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Edad: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Género: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Origen: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Raza: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Clase: </span><i>Data</i></p><p class="fas fa-cannabis"><span> Facción: </span><i>Data</i></p></div><div class="infoTitle" style="margin-top: 20px; margin-bottom: 15px;">Extras</div><div class="ext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.</div></div><div class="textTab"> <h2>Físico</h2> <div class="ingresarTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br></div><h2>Psicología</h2> <div class="ingresarTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br></div><h2>Historia</h2> <div class="ingresarTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae, ad fuga praesentium dolorum excepturi magnam aut corporis ullam modi hic animi quia nesciunt tenetur corrupti dolorem, veniam repellendus dicta! <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique? Aspernatur impedit natus, maiores eligendi corrupti et sit saepe autem modi iure odio dicta velit libero in ipsam harum distinctio.<br><br></div></div><div class="origen"><a href="https://www.facebook.com/daquinoblanco">Aquino</a> &copy; Para uso exlusivo en <a href="http://demonic-city.foroactivo.com">Demonic City</a></div></div></center><link rel="stylesheet" href="styles.css">`;

    return template;
  }

  notify(event) {
    alert('¡Copiado al portapapeles!');
  }
}
