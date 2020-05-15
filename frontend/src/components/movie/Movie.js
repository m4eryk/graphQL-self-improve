import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MovieStyles from './MovieStyles';

const Movie = ({ classes, genre, img, title, director }) => {
  const { root, poster } = classes;

  return (
    <GridListTile className={root}>
      <img src={img} alt={title} className={poster} />
      <GridListTileBar
        title={title}
        subtitle={<span>Genre: {genre}, by: {director.name}</span>}
      />
    </GridListTile>
  );
};

export default withStyles(MovieStyles)(Movie);
