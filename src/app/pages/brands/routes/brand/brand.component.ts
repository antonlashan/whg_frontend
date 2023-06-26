import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, startWith, switchMap } from 'rxjs';

import { IBrandGame } from 'src/app/interfaces/brand-game';
import { ICategoriesGroups } from 'src/app/interfaces/category';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent implements OnInit {
    brandId!: number;
    categoriesGroupsAndGames$?: Observable<{ categoriesGroups: ICategoriesGroups | null; games: IBrandGame[] | null }>;

    constructor(
        private route: ActivatedRoute,
        private brandService: BrandService,
        private categoryService: CategoryService
    ) {}

    ngOnInit() {
        const games$ = combineLatest({ param: this.route.paramMap, queryParam: this.route.queryParamMap }).pipe(
            switchMap(({ param, queryParam }) => {
                this.brandId = Number(param.get('id'));
                const contryCode = queryParam.get('cc');

                if (!this.brandId) {
                    throw Error('brandId not set');
                }

                return this.brandService.getBrandGames(this.brandId, contryCode).pipe(startWith(null));
            })
        );

        this.categoriesGroupsAndGames$ = combineLatest({
            games: games$,
            categoriesGroups: this.categoryService.categoriesGroups$,
        });
    }
}
