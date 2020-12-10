import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter as Router, } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'
import ArticleList from '../views/ArticleList'
import ArticleNew from '../views/ArticleNew'
import CommentList from '../views/CommentList'
import PageList from '../views/PageList'
import SystemSetting from '../views/SystemSetting'
import GuidePage from '../views/Guide'
import RishText from '../views/Editor/RishText'
import CodeText from '../views/Editor/CodeText'
import MarkDown from '../components/Editor/MarkDown'
const Login = lazy(() => import('../views/Login'));
const Layout = lazy(() => import('../layout'));

const BaseTable = lazy(() => import('../components/Tables/BaseTable'));
const EditTable = lazy(() => import('../components/Tables/EditTable'));

import ERR_403 from '../views/ErrorPage/403'
import ERR_404 from '../views/ErrorPage/404'
import ERR_500 from '../views/ErrorPage/500'

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/guide" component={GuidePage}></Route>
        <Route exact path="/comment-list" component={CommentList}></Route>
        <Route exact path="/page-list" component={PageList}></Route>
        <Route exact path="/rishtext-editor" component={RishText}></Route>
        <Route exact path="/code-editor" component={CodeText}></Route>
        <Route exact path="/markdown-editor" component={MarkDown}></Route>
        <Route exact path="/article-list" component={ArticleList}></Route>
        <Route exact path="/article-new" component={ArticleNew}></Route>
        <Route exact path="/table-base" component={BaseTable}></Route>
        <Route exact path="/table-edit" component={EditTable}></Route>
        <Route exact path="/system-setting" component={SystemSetting}></Route>
        <Route exact path="/403" component={ERR_403}></Route>
        <Route exact path="/404" component={ERR_404}></Route>
        <Route exact path="/500" component={ERR_500}></Route>
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