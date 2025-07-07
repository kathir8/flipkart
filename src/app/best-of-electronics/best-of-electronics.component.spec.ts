import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfElectronicsComponent } from './best-of-electronics.component';

describe('BestOfElectronicsComponent', () => {
  let component: BestOfElectronicsComponent;
  let fixture: ComponentFixture<BestOfElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestOfElectronicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestOfElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
