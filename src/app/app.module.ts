import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { MainGameComponent } from './main-game/main-game.component';
import { ProfileComponent } from './profile/profile.component';
import { ChoiceComponent } from './choice/choice.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    StartMenuComponent,
    MainGameComponent,
    ProfileComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
