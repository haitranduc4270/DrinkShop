let cartState = false;
let menuState = false;

export const setCartState = () => {
    cartState = !cartState; 
}

export const getCartState = () => {
    return cartState;  
}

export const setMenuState = () => {
    menuState = !menuState; 
}

export const getMenuState = () => {
    return menuState;  
}

