export const initialState = {
    basket: [], 
};

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    //tallys up the basket all of the items, fancy way of writing a for loop and tallying up the items in basket, and initial amount is going to be zero
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id);
                let newBasket = [...state.basket];
                if(index >= 0){
                    newBasket.splice(index, 1);
                    
                } else {
                    console.warn(
                        `Can't remove product (id: ${action.id}) as its not in basket!`
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
                
            default: 
                return state;
            };
    }

export default reducer;