import React from 'react';
import { render } from '@testing-library/react';
import MainApp from './App';
import ReactDom from 'react-dom';


test('renders learn react link', () => {
	const div = document.createElement('div');
	ReactDom.render(<MainApp />, div);
	ReactDom.unmountComponentAtNode(div)
});
