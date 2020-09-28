import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter as Router, } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'
import ArticleList from '../views/ArticleList'
import CommentList from '../views/CommentList'
import PageList from '../views/PageList'
import SystemSetting from '../views/SystemSetting'
const Login = lazy(() => import('../views/Login'));
const Layout = lazy(() => import('../layout'));
import ERR_404 from '../views/ErrorPage/404'

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main/about" component={About}></Route>
        <Route exact path="/main/comment-list" component={CommentList}></Route>
        <Route exact path="/main/page-list" component={PageList}></Route>
        <Route exact path="/main/article-list" component={ArticleList}></Route>
        <Route exact path="/main/system-setting" component={SystemSetting}></Route>
        <Route path="/*" component={ERR_404}></Route>
      </Switch>
    </Suspense>
  )
}

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </Suspense>
  )
}