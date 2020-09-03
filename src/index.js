import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id:1, message: 'How are you?', likesCount:11 },
  {id:2, message: 'mmmm?', likesCount:2 },
  {id:3, message: 'Are you ok?', likesCount:4 }
]
let dialogs = [
  { name: 'Hanna', id: 1},
  { name: 'BonBon', id: 2},
  { name: 'Mike', id: 3},
  { name: 'Dino', id: 4},
  { name: 'Lex', id: 5},
  { name: 'MoMo', id: 6}

]
let messages = [
  {id: 1, message: 'I think the time has come...'},
  {id: 1, message: 'I\'m very angry'},
  {id: 1, message: 'I know you ate my food!!!'}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
