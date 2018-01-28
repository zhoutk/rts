import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
import { Provider } from 'react-redux';
import StoreConfig  from './store';
import { hashHistory } from 'react-router';
import RouterConfig from './routers';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.less';

const store = StoreConfig();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig history={history} />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
