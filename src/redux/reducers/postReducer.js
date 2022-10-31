


export const postReducer = (state = [], action) => {	
	
	
	
	
	switch (action.type) {
		
		case "GET_ALL_DATA":
		state = action.payload	
		return state;
		
		
		case "ADD_POSTS":
	state = [...state,action.payload];	
		return state;
		
		
		
		case "DELETE_POST":
			const filterPosts = state.filter((contact) => 
				contact.id !== action.payload && contact
					);
			state = filterPosts;
			return state;
		
		
	case "UPDATE_POST":
	const updateState = state.map((contact) =>
		contact.id === action.payload.id ? action.payload : contact
	);
	state = updateState;
	return state;


		
		
		default:
      return state;
		
	}
	
}	
	
	
//export default contactReducer;
//export default contactReducer;