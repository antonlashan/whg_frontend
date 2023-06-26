import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../interfaces/brand';
import { IBrandGame } from '../interfaces/brand-game';
import { ICategory } from '../interfaces/category';

@Injectable({
    providedIn: 'root',
})
export class BrandService {
    constructor(private http: HttpClient) {}

    getBrands() {
        return this.http.get<IBrand[]>('api/brands');
    }

    getCategories(brandId: string) {
        return this.http.get<ICategory[]>(`api/brands/${Number(brandId)}/categories`);
    }

    getBrandGames(brandId: number, countryCode?: string | null) {
        let params = new HttpParams();

        if (countryCode) {
            params = params.set('country_code', countryCode);
        }

        return this.http.get<IBrandGame[]>(`api/brands/${brandId}/games?${params.toString()}`);
    }
}
