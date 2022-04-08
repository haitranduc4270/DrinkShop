import { onClickCart } from './EventHandler.js';
import { renderCart } from './Render.js';

export const displayCart = async () => {

    renderCart();
    document.getElementById('cart').onclick = onClickCart;

}