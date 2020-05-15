import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import { WithStyles, withStyles } from '@material-ui/core';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { IMovie } from '../../interfaces/IMovie';
import MovieStyles from './MovieStyles';

interface MovieProps extends WithStyles, IMovie {
}

const Movie: React.FC<MovieProps> = ({classes, genre, img, title, director}) => {
    const { root, poster } = classes;

    return (
        <GridListTile className={root}>
            <img src={img} alt={title} className={poster} />
            <GridListTileBar
                title={title}
                subtitle={<span>Genre: {genre}, by: </span>}
            />
        </GridListTile>
    );
};

export default withStyles(MovieStyles)(Movie);
