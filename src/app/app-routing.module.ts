import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
            { path: 'brands', loadChildren: () => import('./pages/brands/brands.module').then((m) => m.BrandsModule) },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
