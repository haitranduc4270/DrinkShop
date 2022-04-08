import { getCartState, setCartState } from "./State.js";

export const onClickCart = () => {
    const userCart = document.getElementById('user-cart');
    if(getCartState()) userCart.setAttribute('style', 'display : none');
    else userCart.setAttribute('style', 'display : block');
    setCartState(!getCartState());
}


