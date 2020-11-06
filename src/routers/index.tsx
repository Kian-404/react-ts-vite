import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter as Router, } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'
import ArticleList from '../views/ArticleList'
import CommentList from '../views/CommentList'
import PageList from '../views/PageList'
import SystemSetting from '../views/SystemSetting'
import RishText from '../views/Editor/RishText'
import CodeText from '../views/Editor/CodeText'
const Login = lazy(() => import('../views/Login'));
const Layout = lazy(() => import('../layout'));
import ERR_403 from '../views/ErrorPage/403'
import ERR_404 from '../views/ErrorPage/404'
import ERR_500 from '../views/ErrorPage/500'

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main/about" component={About}></Route>
        <Route exact path="/main/comment-list" component={CommentList}></Route>
        <Route exact path="/main/page-list" component={PageList}></Route>
        <Route exact path="/main/rishtext-editor" component={RishText}></Route>
        <Route exact path="/main/code-editor" component={CodeText}></Route>
        <Route exact path="/main/markdown-editor" component={PageList}></Route>
        <Route exact path="/main/article-list" component={ArticleList}></Route>
        <Route exact path="/main/system-setting" component={SystemSetting}></Route>
        <Route exact path="/main/403" component={ERR_403}></Route>
        <Route exact path="/main/404" component={ERR_404}></Route>
        <Route exact path="/main/500" component={ERR_500}></Route>
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