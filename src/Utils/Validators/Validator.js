export let required = (value)=>{
	if(value){
		return undefined
	}else{
		return 'field is required'
	}
}

export let maxLengthCreator = (maxLength) => (value)=>{
	if(value.length <= maxLength){
		return undefined
	}else{
		return ('Max number of symbols is '+maxLength)
	}
	
}