import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import {BrowserRouter} from 'react-router-dom';
import StoreContext from './StoreContext';
import {Provider} from 'react-redux';


let renderTree = (state)=>{
	ReactDOM.render(
		
		/*
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				<App/>
			</StoreContext.Provider>
		</BrowserRouter>, document.getElementById('root'));
		*/
		
		<MainApp/>, document.getElementById('root'));
}

renderTree(store.getState());


