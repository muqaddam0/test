import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import BookView from './components/Books/index'
import Login from './containers/admin/login';
import User from './components/Admin/index';
import AddReview from './containers/admin/add';
import UserPost from './components/Admin/userPost';

import Layout from './hoc/layout';
import Auth  from './hoc/auth';


const Routes = () => {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact component={Auth(Home,null)}/>
      <Route path="/login" exact component={Auth(Login,false)}/>
      <Route path="/user" exact component={Auth(User,true)}/>
      <Route path="/user/add" exact component = {Auth(AddReview,true)}/>
      <Route path="/books/:id" exact component={Auth(BookView,null)}/>
      <Route path="/user/user-reviews" exact component = {Auth(UserPost,true)}/>

      </Switch>
    </Layout>
  );
};

export default Routes;