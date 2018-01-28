/**
 * @component routers
 * @description 路由配置
 * @time 2018/1/9
 * @author jokerXu
 */
import * as React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import App from '../containers/app';
import Hello from '../containers/Hello';
import Error from '../containers/Error';
import Home from '../containers/Home';

export interface Props {
  history: any;
}

const RouterConfig = ({history}: Props) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/demo" component={Hello} />
      </Route>

      <Route path="/404" component={Error}/>
      <Redirect from="*" to="/404" />
    </Router>
  );
};

export default RouterConfig;
