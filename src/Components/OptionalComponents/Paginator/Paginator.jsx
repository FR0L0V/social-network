import React, {useState} from 'react';
import classes from './Paginator.module.css';



let PaginatorOld = (props) =>{
	let pagesCount = Math.ceil(props.usersTotalCount/props.usersOnPage);
	let numberOfPortions = Math.ceil(Math.ceil(props.usersTotalCount/props.usersOnPage)/10);
		let pages = [];
		for(let i = 1; i<=pagesCount;i++){
		pages.push(i);
	}
	return(
		<div>
			{pages.map(a=>{
				return <span className={(props.currentPage === a)? classes.currentPage :""} onClick = {()=>props.onPageChange(a)} >| {a} |</span>
				})
			}
					
		</div>
	)
}




let Paginator = ({totalElementsCount, pageSize, pagesInPortion, currentPage, onPageChange}) =>{  // 
	
	let pagesCount = Math.ceil(totalElementsCount/pageSize);
	let numberOfPortions = Math.ceil(pagesCount/pagesInPortion);
	let [currentPortion, setCurrentPortion] = useState(0);
	let firstPageInPortion = currentPortion*pageSize+1;
	let lastPageInPortion=(currentPortion+1)*pageSize;

	
	let pages = [];
	for(let i = 1; i<=pagesCount;i++){
		pages.push(i);
	}
	
	let onPreviousPortion = () =>{
		setCurrentPortion(currentPortion-1);
		
	}
	
	let onNextPortion = () =>{
		setCurrentPortion(currentPortion+1);
	}
	
	return(
		<div>
		{currentPortion!=0&&<button onClick={onPreviousPortion}>Prev</button>}
			{pages.filter( p => p >= firstPageInPortion && p <= lastPageInPortion)
			.map(p=>{
				return <span className={(currentPage === p)? classes.activePage :""} onClick = {()=>onPageChange(p)} >| {p} |</span> 
			})
			}
		{currentPortion!=(numberOfPortions-1)&&<button onClick={onNextPortion}>Next</button>}			
		</div>
	)
}

export default Paginator;