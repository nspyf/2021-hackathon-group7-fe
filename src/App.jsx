import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Mainpage from './pages/Mainpage'
import MyPage from './pages/MyPage'
import Setting from './pages/Setting'
import BindEmail from './pages/BindEmail'
import PersonInfo from './pages/PersonInfo'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/tudo" exact={true} component={Mainpage}></Route>
          <Route path="/tudo/mypage" component={MyPage}></Route>
          <Route path="/tudo/login" component={Login}></Route>
          <Route path="/tudo/register" component={Register}></Route>
          <Route path="/tudo/setting" component={Setting}></Route>
          <Route path="/tudo/bindemail" component={BindEmail}></Route>
          <Route path="/tudo/personinfo" component={PersonInfo}></Route>
          <Redirect to="/tudo" />
        </Switch>
      </div>
    )
  }
}