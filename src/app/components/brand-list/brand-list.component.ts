import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
    selector: 'app-brand-list',
    templateUrl: './brand-list.component.html',
    styleUrls: ['./brand-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListComponent {
    brands$: Observable<IBrand[]>;

    noOfRows  = new Array(15).fill(null).map((_, i) =>( {id: i})); // for only skeleton

    constructor(brandService: BrandService) {
        this.brands$ = brandService.getBrands();
    }
}
