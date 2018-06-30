import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
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

  it(`should have as title 'love-me'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('love-me');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('love-me');
  }));

  it('should render start button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('start');
  }));

  it('should start game when start button is clicked', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const spy = spyOn(fixture.componentInstance, 'startGame');
    const button = compiled.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('should contain a dialog box', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-dialog-box')).toBeTruthy();
  });

  it('start game should open the start game alert', () => {
    // TEMP TEST until the real start game is implemented
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spy = spyOn(window, 'alert');
    component.startGame();
    expect(spy).toHaveBeenCalledWith('game started');
  });

});
