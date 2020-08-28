import React from 'react';
import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        
      <nav className="nav">
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
      </nav>

      <main className="main">
        <div>
                    <img className="picture-up" src="https://i.pinimg.com/originals/29/b1/f8/29b1f86e4e3ded955528cbc4ba548d48.jpg" alt="gras"/>

          <div className="portfolio">
            <img className ="photoMy" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="PhotoMy"/>
            <div className="about">
              <div>Batton B.</div>

              <div>Date of Brith: 2 january</div>
              <div>City: Saint-Petersburg</div>
              <div>Education: BSU'11</div>
              <div>Web Site: https://batton-batonovich.com</div>
            </div>

            <div className="posts">
              My posts
            </div>
            <div className="posts">
              My posts
            </div>
          </div>
        </div>
      </main>
    </div>

  ) 
}

export default App;
