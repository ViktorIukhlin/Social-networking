import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

console.log(store.getState());

let renderDomTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderDomTree(store.getState());

store.subscribe(renderDomTree);


serviceWorker.unregister();
