import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICategoriesGroups } from '../interfaces/category';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private categoriesGroupsSource = new BehaviorSubject<ICategoriesGroups | null>(null);

    categoriesGroups$ = this.categoriesGroupsSource.asObservable();

    constructor(private http: HttpClient) {}

    loadCategoriesGroups(): Observable<ICategoriesGroups | null> {
        return this.http.get<ICategoriesGroups>('api/categories/groups').pipe(
            tap((data) => {
                this.categoriesGroupsSource.next(data);
            })
        );
    }
}
