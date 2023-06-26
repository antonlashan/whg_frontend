import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCategoryGamesComponent } from './brand-category-games.component';

describe('BrandCategoryGamesComponent', () => {
    let component: BrandCategoryGamesComponent;
    let fixture: ComponentFixture<BrandCategoryGamesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BrandCategoryGamesComponent],
        });
        fixture = TestBed.createComponent(BrandCategoryGamesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
