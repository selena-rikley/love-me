import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameComponent } from './main-game.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ChoiceComponent } from '../choice/choice.component';

describe('MainGameComponent', () => {
  let component: MainGameComponent;
  let fixture: ComponentFixture<MainGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainGameComponent,
        DialogBoxComponent,
        ChoiceComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a dialog box', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-dialog-box')).toBeTruthy();
  });

});
