import React from 'react';
import { inject, observer } from 'mobx-react';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core';
import LibraryStyles from '../components/library/LibraryStyles'
import Movie from '../components/movie/Movie';
import storesName from '../constant/storesName';

@inject(storesName.LIBRARY)
@observer
class Library extends React.Component {
  componentDidMount() {
    const { loadMovies } = this.props[storesName.LIBRARY];
    loadMovies();
  }

  renderMovies = () => {
    const { list } = this.props.classes;
    const { allMovies } = this.props[storesName.LIBRARY];

    if (!allMovies) {
      return null;
    }

    return (
      <GridList cellHeight={500} className={list}>
        {allMovies?.map(movie => <Movie key={movie.id} {...movie} />)}
      </GridList>
    )
  };

  render() {
    const { wrapper } = this.props.classes;

    return (
      <div className={wrapper}>
        {this.renderMovies()}
      </div>
    );
  }
}

export default withStyles(LibraryStyles)(Library);
