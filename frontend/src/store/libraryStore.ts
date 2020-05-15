import { observable, computed, runInAction } from 'mobx';
import { apolloClient } from '../index';
import { MOVIES } from '../gqlSchemes/movies';
import {IMovie} from '../interfaces/Movie';

export class LibraryStore {
  @observable movies: IMovie[] = [];

  @computed get allMovies(): IMovie[] {
    return this.movies;
  }

  loadMovies = async () => {
    const response = await apolloClient.query({
      query: MOVIES
    });

    runInAction(() => {
      this.movies = response?.data.movies;
    });
  };
}
