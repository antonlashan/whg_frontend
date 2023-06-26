import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ICountry } from 'src/app/interfaces/country';

import { CountryService } from 'src/app/services/country.service';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent implements OnInit {
    countries$?: Observable<ICountry[]>;

    selectedCountryCode: ICountry['code'] | null = null;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private countryService: CountryService
    ) {}

    ngOnInit() {
        this.countries$ = this.countryService.getCountries();

        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.selectedCountryCode = params['cc'] ? encodeURIComponent(params['cc']) : null;
        });
    }

    onChangeCountry(countryCode: ICountry['code']) {
        const queryParams: Params = { cc: countryCode || null };

        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: queryParams,
            queryParamsHandling: 'merge',
        });
    }
}
