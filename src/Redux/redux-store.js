import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';
import asideReducer from './asideReducer'
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
	profilePage:profilePageReducer,
	dialogPage:dialogPageReducer,
	usersPage:usersPageReducer,
	aside:asideReducer,
	auth:authReducer,
	form:formReducer,
	app:appReducer,
	
});

 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store=store;
export default store;