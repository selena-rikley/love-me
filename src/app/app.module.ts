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
import { SettingsComponent } from './settings/settings.component';
import { LoadSaveComponent } from './load-save/load-save.component';

import { CharacterStatsService } from './character/character-stats.service';
import { ChapterService } from './chapter/chapter.service';
import { SaveFileService } from './load-save/savefile.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    StartMenuComponent,
    MainGameComponent,
    ProfileComponent,
    ChoiceComponent,
    SettingsComponent,
    LoadSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CharacterStatsService, ChapterService, SaveFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
