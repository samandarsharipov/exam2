const initialState = [
    
]

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Order":
            state = [...state, action.payload];
            return state;
        case 'Updata_Order':
            const updataState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updataState;
            return state;
        case 'Delete_Order':
            const filterContacts = state.filter(contact => contact._id !== action.payload && contact);
            state = filterContacts;
            return state;
        default:
            return state
    }
}

export default orderReducer;