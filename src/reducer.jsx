export const initialState ={
    basket:[],
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount , item) => item.price + amount, 0);
const reducer =(state , action ) => {
    
    switch(action.type) {
        case"Add__to__Basket":
            return {
                ...state, basket: [ ...state.basket , action.item]
            };
        case"Remove__From__Basket":
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index,1);

            }else{
                console.warn(`cant remove product (id:${action.id}) not in basket !`)
            }
            return{
                ...state,
                basket:newBasket
            }

        default :
            return state;
    }
};
export default reducer;