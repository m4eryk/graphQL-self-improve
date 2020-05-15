import { createStyles, Theme } from "@material-ui/core";

const headerStyle = ({
                       palette,
                       breakpoints,
                       spacing,
                       shape,
                       transitions}: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: shape.borderRadius,
    backgroundColor: palette.common.white,
    '&:hover': {
      backgroundColor: palette.common.white,
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${spacing(4)}px)`,
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
});

export default headerStyle;
