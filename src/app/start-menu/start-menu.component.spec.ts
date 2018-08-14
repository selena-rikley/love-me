import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMenuComponent } from './start-menu.component';

describe('StartMenuComponent', () => {
  let component: StartMenuComponent;
  let fixture: ComponentFixture<StartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'love-me'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('love-me');
  }));

  it('should render title in a img', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#imgTitle').src).toContain('/assets/tmpTitle.png');
  }));

  it('should render start button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#start-button').textContent).toContain('start');
  }));

  it('should render load button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#load-button').textContent).toContain('load');
  }));

  it('should render settings button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#settings-button').textContent).toContain('settings');
  }));

  it('should render exit button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#exit-button').textContent).toContain('exit');
  }));

  it('should start game when start button is clicked', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const spy = spyOn(fixture.componentInstance, 'startGame');
    const button = compiled.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('start game should open the start game alert', () => {
    // TEMP TEST until the real start game is implemented
    const spy = spyOn(window, 'alert');
    component.startGame();
    expect(spy).toHaveBeenCalledWith('new game started');
  });

  it('load game should open the load game alert', () => {
    // TEMP TEST until the real start game is implemented
    const spy = spyOn(window, 'alert');
    component.loadGame();
    expect(spy).toHaveBeenCalledWith('go to load menu');
  });

  it('settings should open the settings alert', () => {
    // TEMP TEST until the real start game is implemented
    const spy = spyOn(window, 'alert');
    component.settings();
    expect(spy).toHaveBeenCalledWith('go to settings menu');
  });

  it('exit should open the exit alert', () => {
    // TEMP TEST until the real start game is implemented
    const spy = spyOn(window, 'alert');
    component.exit();
    expect(spy).toHaveBeenCalledWith('game closed');
  });

});
