import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText } from './redux/state';

let renderDomTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderDomTree(state);

subscribe(renderDomTree);


serviceWorker.unregister();
