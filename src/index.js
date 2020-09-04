import * as serviceWorker from './serviceWorker';
import {renderDomTree} from './render';
import state from './redux/state';

renderDomTree(state);

serviceWorker.unregister();
