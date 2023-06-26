import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCategoryGamesSkeletonComponent } from './brand-category-games-skeleton.component';

describe('BrandCategoryGamesSkeletonComponent', () => {
  let component: BrandCategoryGamesSkeletonComponent;
  let fixture: ComponentFixture<BrandCategoryGamesSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandCategoryGamesSkeletonComponent]
    });
    fixture = TestBed.createComponent(BrandCategoryGamesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
