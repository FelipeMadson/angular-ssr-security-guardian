import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [App]
    });
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('[CRIT-1] App deve ser criado', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('[CRIT-2] App deve ter conteúdo no DOM', () => {
    expect(fixture.nativeElement.textContent).toBeTruthy();
  });
});