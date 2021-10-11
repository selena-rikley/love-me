import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { MainGameComponent } from './main-game/main-game.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoadSaveComponent } from './load-save/load-save.component';

const routes: Routes = [
  {path: 'start', component: StartMenuComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'main', component: MainGameComponent},
  {path: 'new-game', component: ProfileComponent},
  {path: 'load-save', component: LoadSaveComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
