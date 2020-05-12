import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

import headerStyle from '../../components/Styles';
import Header from '../../components/Header';

export default compose(withStyles(headerStyle))(Header);

