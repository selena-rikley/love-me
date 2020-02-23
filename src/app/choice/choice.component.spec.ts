import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceComponent } from './choice.component';
import { Choice } from './choice';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not display an option if option is null', () => {
    component.option = null;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const choice = compiled.querySelector('li.choice');
    expect(choice).toEqual(null);
  });

  it('should display an option if given', () => {
    component.option = new Choice("mockText", "");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const choice = compiled.querySelector('li.choice');
    expect(choice.innerText).toEqual("mockText");
  });

  it('should generate clickable list of options', () => {
    component.option = new Choice("mockText", "");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const choiceList = compiled.querySelector('li.choice');
    const spy = spyOn(fixture.componentInstance, 'optionClick');
    choiceList.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should record choice on click', () => {
    // TEMP TEST until recording method implemented
    const spy = spyOn(window, 'alert');
    component.optionClick();
    expect(spy).toHaveBeenCalledWith('Your choice could have consequences');
  })
});
