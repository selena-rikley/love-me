import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { MainGameComponent } from './main-game/main-game.component';
import { ProfileComponent } from './profile/profile.component';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const routes: Routes = [
  {path: 'start', component: StartMenuComponent},
  {path: 'main', component: MainGameComponent},
  {path: 'new-game', component: ProfileComponent},
  {path: '', component: DialogBoxComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
