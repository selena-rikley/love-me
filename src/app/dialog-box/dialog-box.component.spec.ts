import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxComponent } from './dialog-box.component';
import { ChoiceComponent } from '../choice/choice.component';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxComponent, ChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger nextLine method on click', async () => {
    const compiled = fixture.debugElement.nativeElement;
    const dialogDiv = compiled.querySelector('.dialog-box');
    const spy = spyOn(fixture.componentInstance, 'nextLine');
    fixture.detectChanges();
    dialogDiv.click();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    })
  });

  it('nextLine should iterate through the dialog', async () => {
    const compiled = fixture.debugElement.nativeElement;
    const dialogDiv = compiled.querySelector('.dialog-box');
    let dialogLine = compiled.querySelector('p');
    expect(dialogLine.innerText).toEqual('');

    dialogDiv.click();
    fixture.detectChanges();

    dialogLine = compiled.querySelector('p');
    expect(dialogLine.innerText).toContain('You slowly open your eyes.');

    dialogDiv.click();
    fixture.detectChanges();

    dialogLine = compiled.querySelector('p');
    expect(dialogLine.innerText).toContain('Hey.');
  });
});
