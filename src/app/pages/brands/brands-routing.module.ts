import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';

const routes: Routes = [
    { path: '', component: BrandsComponent },
    { path: ':id', loadChildren: () => import('./routes/brand/brand.module').then((m) => m.BrandModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BrandsRoutingModule {}
