import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, HashRouter } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state.listOfFriends}/>
        <div className="app-wrapper-content">
          <Route path='/messages' 
                  render={ () => <Dialogs 
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                  />} />
                  
          <Route path='/profile' render={ () => <Profile store={props.store}/>}/>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
