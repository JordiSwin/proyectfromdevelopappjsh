import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisVideosComponent } from './regis-videos.component';

describe('RegisVideosComponent', () => {
  let component: RegisVideosComponent;
  let fixture: ComponentFixture<RegisVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
