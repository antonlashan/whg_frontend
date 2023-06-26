import { Component, Input } from '@angular/core';

import { IBrandGame } from 'src/app/interfaces/brand-game';
import { IGame } from 'src/app/interfaces/game';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    @Input() game!: IGame;
    @Input() hot?: IBrandGame['hot'];
    @Input() new?: IBrandGame['new'];

    imagePathUrl = environment.imagePathUrl;

    onClickGame() {
        console.log(this.game.launchcode);
        alert(this.game.launchcode);
    }
}
