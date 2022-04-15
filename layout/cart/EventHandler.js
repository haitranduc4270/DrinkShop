import { getCartState, setCartState, getMenuState, setMenuState } from "./State.js";

export const onClickCart = () => {
    const userCart = document.getElementById('l-cart');
    if(getCartState()) userCart.setAttribute('style', 'display : none');
    else userCart.setAttribute('style', 'display : block');
    setCartState(!getCartState());
}

export const onClickMenu = () => {
    const menu = document.getElementById('l-menu');
    if(getMenuState()) menu.setAttribute('style', 'display : none');
    else menu.setAttribute('style', 'display : flex');
    setMenuState(!getMenuState());
}
