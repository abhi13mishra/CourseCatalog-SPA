export const initialState = JSON.parse(localStorage.getItem("favourites")) || [];
export const favouritesReducer = (state, action) =>{
    switch(action.type){

        case "add":
        const newState = [...state, action.payload];
        localStorage.setItem("favourites", JSON.stringify(newState));
        return newState;

        case "remove":
            const filtered = state.filter((id)=> id != action.payload);
            localStorage.setItem("favourites", JSON.stringify(filtered));
            return filtered;
        
        default:
            return state
    }
};