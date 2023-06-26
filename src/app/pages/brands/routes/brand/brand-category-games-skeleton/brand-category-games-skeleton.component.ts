import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-category-games-skeleton',
  templateUrl: './brand-category-games-skeleton.component.html',
  styleUrls: ['./brand-category-games-skeleton.component.scss']
})
export class BrandCategoryGamesSkeletonComponent {
  noOfRows  = new Array(3).fill(null).map((_, i) =>( {id: i})); // for only skeleton
  itemsPerRow  = new Array(4).fill(null).map((_, i) =>( {id: i})); // for only skeleton
}
