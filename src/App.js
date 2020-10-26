import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navigation/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }
  render () {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav state={this.props.store}/>
          <div className="app-wrapper-content">
            <Route path='/messages' render={ withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer)} />
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect (mapStateToProps, {initializeApp})
  ) (App);
