import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModelAComponent } from './pages/card-model-a/card-model-a.component';
import { CardModelBComponent } from './pages/card-model-b/card-model-b.component';
import { CardModelCComponent } from './pages/card-model-c/card-model-c.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { CopyClipboardModule } from './directives/copy-clipboard.module';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import {ComponentsModule} from './components/components.module';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModelDComponent } from './pages/card-model-d/card-model-d.component';

@NgModule({
  declarations: [
    AppComponent,
    CardModelAComponent,
    CardModelBComponent,
    CardModelCComponent,
    HomeComponent,
    CardListComponent,
    CardModelDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    CopyClipboardModule,
    ComponentsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
