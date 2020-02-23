import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { Character, pronouns, CharacterTag } from '../character/character';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render temp header in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('New game page');
  }));

  it('should render back button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#back-button').textContent).toContain('back');
  }));

  it('should render continue button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#submit-button').textContent).toContain('create');
  }));

  it('should return to start menu when back button is clicked', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const spy = spyOn(fixture.componentInstance, 'goBack');
    const button = compiled.querySelector('#back-button');
    button.click();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('should proceed to main game when continue button is clicked', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const spy = spyOn(fixture.componentInstance, 'submit');
    const button = compiled.querySelector('#submit-button');
    button.click();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('start game should create new user', () => {
    let user: Character;

    user = component.submit('testy', pronouns.female);

    expect(user.name).toBe('testy');
    expect(user.gender).toBe(pronouns.female);
    expect(user.id).toBe(CharacterTag.Player);
  });
});
