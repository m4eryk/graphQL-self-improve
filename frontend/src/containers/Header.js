import React, { useMemo } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import headerStyle from '../components/header/Styles';

const Header = ({ classes }) => {
  const {
    root,
    bar,
    menuButton,
    title,
    search,
    searchIcon,
    inputRoot,
    inputInput,
  } = classes;

  const baseInputClasses = useMemo(() => ({
    root: inputRoot,
    input: inputInput,
  }), [inputRoot, inputInput]);

  const baseInputProps = useMemo(() => ({'aria-label': 'search'}), []);

  return (
    <div className={root}>
      <AppBar position="static" className={bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon/>
          </IconButton>
          <Typography className={title} variant="h6" noWrap>
            Movie Library
          </Typography>
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={baseInputClasses}
              inputProps={baseInputProps}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(headerStyle)(Header);

