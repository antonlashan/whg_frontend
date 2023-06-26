import { NgModule } from '@angular/core';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { SharedModule } from 'src/app/shared.module';
import { BrandCategoryGamesComponent } from './brand-category-games';
import { BrandCategoryGamesSkeletonComponent } from './brand-category-games-skeleton';

const MODULES = [SharedModule, BrandRoutingModule];
const COMPONENTS = [BrandComponent, BrandCategoryGamesComponent, BrandCategoryGamesSkeletonComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [...MODULES],
})

export class BrandModule {}
