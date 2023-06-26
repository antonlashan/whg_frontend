import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from 'src/app/components/sidebar';
import { SharedModule } from 'src/app/shared.module';
import { BrandListComponent } from 'src/app/components/brand-list';

const MODULES = [SharedModule];
const COMPONENTS = [MainLayoutComponent, SidebarComponent, BrandListComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
})
export class MainLayoutModule {}
