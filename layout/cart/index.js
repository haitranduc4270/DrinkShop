import { onClickCart, onClickMenu } from './EventHandler.js';
import { renderCart } from './Render.js';

export const displayCart = async () => {
    renderCart();
    document.getElementById('cart').onclick = onClickCart;
    document.getElementById('cart--mobile').onclick = onClickCart;
    document.getElementById('c-menu-button').onclick = onClickMenu;
    document.getElementById('c-coating').onclick = onClickMenu;
}