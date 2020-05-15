import { Instance, types } from 'mobx-state-tree';
import { IModelStore } from './store';
import { apolloClient } from '../index';
import { MOVIES } from '../gqlSchemes/movies';
import MovieStore from './movieStore';
import { IMovie } from '../interfaces/IMovie';
import storesName from '../constant/storesName';

const LibraryStore: any = types.model(storesName.LIBRARY, {
    [storesName.MOVIE]: types.array(MovieStore)
})
    .actions((self: IModelStore) => ({
        addMovie(movie: IMovie) {
            self[storesName.MOVIE] = [...self[storesName.MOVIE], movie];
        },
        deleteMovie(id: string) {
            self[storesName.MOVIE] = [...self[storesName.MOVIE].filter((movie: IMovie) => movie.id !== id)];
        },
        runInAction(fn: Function) {
            return fn()
        },
        async loadMovies() {
            const response = await apolloClient.query({
                query: MOVIES
            });

            self.runInAction(() => self[storesName.MOVIE] = [
                ...response?.data.movies.slice(response.data.movies.length - 4)
            ]);
        }
    }))
    .views((self: IModelStore) => ({
        allMovies(): IMovie[] {

            return self[storesName.MOVIE];
        }
    }));

export interface ILibraryStore extends Instance<typeof LibraryStore> {
}

export default LibraryStore;
