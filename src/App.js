import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navigation/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav state={props.store}/>
        <div className="app-wrapper-content">
          <Route path='/messages' render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?'  render={ () => <ProfileContainer />}/>
          <Route path='/users'  render={ () => <UsersContainer />}/>
          <Route path='/login'  render={ () => <Login />}/>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
