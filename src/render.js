import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText } from './redux/state';

export let renderDomTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
