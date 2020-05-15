import React from 'react';
import { inject, observer } from 'mobx-react';
import Movie from '../components/movie/Movie';
import { IMovie } from '../interfaces/IMovie';
import { ILibraryStore } from '../store/libraryStore';
import GridList from '@material-ui/core/GridList';
import { WithStyles, withStyles } from '@material-ui/core';
import LibraryStyles from '../components/library/LibraryStyles'
import storesName from '../constant/storesName';

interface LibraryProps extends WithStyles {
    [storesName.LIBRARY]: ILibraryStore;
}

@inject(storesName.LIBRARY)
@observer
class LibraryContainer extends React.Component<LibraryProps> {
    componentDidMount() {
        const {loadMovies} = this.props[storesName.LIBRARY];

        loadMovies();
    }

    renderMovies = () => {
        const {list} = this.props.classes;
        const {allMovies} = this.props[storesName.LIBRARY];

        if (!allMovies()) {
            return null;
        }

        return (
            <GridList cellHeight={500} className={list}>
                {allMovies()?.map((movie: IMovie) => <Movie key={movie.id} {...movie} />)}
            </GridList>
        )
    };

    render() {
        const {wrapper} = this.props.classes;

        return (
            <div className={wrapper}>
                {this.renderMovies()}
            </div>
        );
    }
}

export default withStyles(LibraryStyles)(LibraryContainer);
