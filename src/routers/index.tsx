import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'
import ArticleList from '../views/ArticleList'
import CommentList from '../views/CommentList'
import PageList from '../views/PageList'
import SystemSetting from '../views/SystemSetting'
import ERR_404 from '../views/ErrorPage/404'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/comment-list" component={CommentList}></Route>
      <Route exact path="/page-list" component={PageList}></Route>
      <Route exact path="/article-list" component={ArticleList}></Route>
      <Route exact path="/system-setting" component={SystemSetting}></Route>
      <Route path="/*" component={ERR_404}></Route>
    </Switch>
  )
}

export default Routes