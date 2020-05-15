import { Instance, types } from 'mobx-state-tree';
import storesName from '../constant/storesName';

const MovieStore = types.model(storesName.MOVIE, {
    id: types.string,
    title: types.string,
    genre: types.string,
    img: types.string,
});

export interface IMovieStore extends Instance<typeof MovieStore> {}

export default MovieStore;
