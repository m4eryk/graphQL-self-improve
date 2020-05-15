import { IDirectors } from './IDirectors';

export interface IMovie {
    id: string,
    title: string,
    genre: string,
    img: string,
    director: IDirectors
}
