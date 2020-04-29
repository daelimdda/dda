import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from '@version/react-router-v3';
import './index.css';
import App from './App';
import Quiz from './component/quiz';
import Road from './component/road';
import home from './component/home';
import Board from './component/board';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={home}/>
    <Route path="quiz" component={Quiz}/>
    <Route path="road" component={Road}/>
    <Route path="board" component={Board}/>
  </Route>
</Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

