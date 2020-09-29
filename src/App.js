import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.store}/>
        <div className="app-wrapper-content">
          <Route path='/messages' render={ () => <DialogsContainer />} />
          <Route path='/profile'  render={ () => <Profile />}/>
          <Route path='/users'  render={ () => <UsersContainer />}/>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
