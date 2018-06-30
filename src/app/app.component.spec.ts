import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import {StartMenuComponent} from './start-menu/start-menu.component';
import {MainGameComponent} from './main-game/main-game.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StartMenuComponent,
        MainGameComponent,
        DialogBoxComponent
      ],
      imports: [ RouterTestingModule.withRoutes([{path: 'start', component: StartMenuComponent},
      {path: 'main', component: MainGameComponent}]) ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
