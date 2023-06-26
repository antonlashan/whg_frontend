import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    showMenu = false;
    toggleNavbar() {
        this.showMenu = !this.showMenu;
    }

    constructor(private categoryService: CategoryService) {
        this.categoryService.loadCategoriesGroups().subscribe();
    }
}
