import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICountry } from '../interfaces/country';

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    constructor(private http: HttpClient) {}

    getCountries() {
        return this.http.get<ICountry[]>('api/countries');
    }
}
