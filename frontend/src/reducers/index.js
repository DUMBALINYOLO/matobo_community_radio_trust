import { combineReducers } from 'redux';
import uiReducer from './ui';
import auth from './auth';
import subMenuOpen from './itmenu';
import services from './services';
import errors from './errors';
import staffusers from './staffusers';
import blogs from './blogs';
import theme from './theme'
import messaging from './messaging'





export default combineReducers({
    ui: uiReducer,
	subMenuOpen,
    auth,
    services,
    messaging,
    errors,
    blogs,
    staffusers,
    theme,
});

