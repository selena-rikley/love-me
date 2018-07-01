import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceComponent } from './choice.component';

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

  it('should generate clickable list of options', () => {
    const compiled = fixture.debugElement.nativeElement;
    const choiceList = compiled.querySelector('li.choice');
    const spy = spyOn(fixture.componentInstance, 'optA');
    fixture.detectChanges();
    choiceList.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should record choice on click', () => {
    // TEMP TEST until recording method implemented
    const spy = spyOn(window, 'alert');
    component.optA();
    expect(spy).toHaveBeenCalledWith('Your choice could have consequences');
  })
});
