import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameComponent } from './components/game';
import { CountriesComponent } from './components/countries/countries.component';
import { NgForTrackByPropertyDirective } from './directives/ng-for-track-by-roperty.directive';
import { FormsModule } from '@angular/forms';

const MODULES = [CommonModule, RouterModule, FormsModule];
const COMPONENTS = [GameComponent, CountriesComponent];
const DIRECTIVES = [NgForTrackByPropertyDirective];

@NgModule({
    imports: [...MODULES],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
