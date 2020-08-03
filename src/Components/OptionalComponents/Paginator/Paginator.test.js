import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component test', ()=>{
	test('page count is 11, but it sholud be only 10 on page', ()=>{
		let component = create(<Paginator totalElementsCount={11} pageSize={1} pagesInPortion={10} onPageChange={()=>{}} />);
		let root = component.root;
		let spans = root.findAllByType('span');
		expect(spans.length).toBe(10);
	});
})