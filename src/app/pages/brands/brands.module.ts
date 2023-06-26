import { NgModule } from '@angular/core';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';

const MODULES = [BrandsRoutingModule];
const COMPONENTS = [BrandsComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
})
export class BrandsModule {}
