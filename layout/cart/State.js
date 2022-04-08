let cartState = false;

export const setCartState = () => {
    cartState = !cartState; 
}

export const getCartState = () => {
    return cartState;  
}


