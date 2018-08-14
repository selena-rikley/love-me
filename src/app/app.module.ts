import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '../../node_modules/@angular/forms';
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
