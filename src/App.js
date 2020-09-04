import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state.listOfFriends}/>
        <div className="app-wrapper-content">
          <Route path='/messages' render={ () => <Messages state={props.state.messagePage} />} />
          <Route path='/profile'  render={ () => <Profile  state={props.state.profilePage} addPost={props.addPost}/>} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
