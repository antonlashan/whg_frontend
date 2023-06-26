import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBrandGame } from 'src/app/interfaces/brand-game';
import { ICategory } from 'src/app/interfaces/category';

@Component({
    selector: 'app-brand-category-games',
    templateUrl: './brand-category-games.component.html',
    styleUrls: ['./brand-category-games.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandCategoryGamesComponent {
    minimumGamesPerCategory = 4;

    @Input() categories!: ICategory[];
    @Input() brandGames!: IBrandGame[];

    getFilteredCategories() {
        return this.categories.filter((c) => this.brandGames.some((g) => g.category === c.category));
    }

    getFilteredCategoryGames(category: ICategory) {
        return this.brandGames.filter((g) => g.category === category.category);
    }
}
