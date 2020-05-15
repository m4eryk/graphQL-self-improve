import createHistory from 'history/createBrowserHistory';
import { RouterModel, syncHistoryWithStore } from 'mst-react-router';

const routerModel = RouterModel.create();
const browserHistory = createHistory();

export const history = syncHistoryWithStore(browserHistory, routerModel);

export default routerModel;
