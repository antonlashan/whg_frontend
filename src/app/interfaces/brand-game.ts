import { IGame } from './game';

export interface IBrandGame {
    category: string;
    hot: boolean;
    new: boolean;
    game: IGame;
    seq: number;
}
