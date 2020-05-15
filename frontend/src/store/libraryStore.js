import { action, observable, computed, runInAction } from 'mobx';
import { apolloClient } from '../index';
import { MOVIES } from '../gqlSchemes/movies';

export class LibraryStore {
  @observable movies = null;

  @computed get allMovies() {
    return this.movies;
  }

  loadMovies = async () => {
    const response = await apolloClient.query({
      query: MOVIES
    });
    console.log(response?.data.movies);
    runInAction(() => {
      this.movies = response?.data.movies;
    });
  };
}
