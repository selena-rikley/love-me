import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { MainGameComponent } from './main-game/main-game.component';

const routes: Routes = [
  {path: 'start', component: StartMenuComponent},
  {path: 'main', component: MainGameComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
