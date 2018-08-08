import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {StartMenuComponent} from './start-menu/start-menu.component';
import {MainGameComponent} from './main-game/main-game.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import { ProfileComponent } from './profile/profile.component';
import { ChoiceComponent } from './choice/choice.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StartMenuComponent,
        MainGameComponent,
        DialogBoxComponent,
        ProfileComponent,
        ChoiceComponent
      ],
      imports: [ RouterTestingModule.withRoutes([{path: 'start', component: StartMenuComponent},
      {path: 'main', component: MainGameComponent}, {path: 'new-game', component: ProfileComponent}]), FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain a router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const routerComponent = compiled.querySelector('router-outlet');
    expect(routerComponent).toBeDefined();
  });

});
