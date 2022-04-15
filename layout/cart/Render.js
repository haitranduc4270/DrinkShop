import { onClickCart } from "./EventHandler.js";
import { getUser } from '../../apis/user.js';

const renderHeader = (userInfor) => {
    const cartHeader = document.createElement('div');
    cartHeader.className = 'c-header';

    const name = document.createElement('div');
    name.className = 'c-header__name';
    name.innerHTML = userInfor.name;
    
    const email = document.createElement('div');
    email.className = 'c-header__email';
    email.innerHTML = userInfor.email;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'c-header__close-button';
    closeButton.onclick = onClickCart;
    const close = document.createElement('span');
    close.innerHTML = 'x';

    closeButton.appendChild(close);

    cartHeader.appendChild(name);
    cartHeader.appendChild(email);
    cartHeader.appendChild(closeButton);

    return cartHeader;
}

const renderProducts = (userInfor) => {
    const productList = document.createElement('div');
    productList.className = 'l-product-list';

    userInfor.cart.map((product) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'c-product-cart';

        const thumbnail = document.createElement('img');
        thumbnail.className = 'c-product-cart__thumbnail';
        thumbnail.src = product.thumbnail;

        const infor = document.createElement('div');
        infor.className = 'c-product-cart__infor';

        const name = document.createElement('p');
        name.className = 'c-product-cart__name';
        name.innerHTML = product.name;

        const price = document.createElement('div');
        price.className = 'c-product-cart__price';

        const priceFrom = document.createElement('p');
        priceFrom.className = 'c-product-cart__price-from';
        priceFrom.innerHTML = product.cost.from;

        const priceTo = document.createElement('p');
        priceTo.className = 'c-product-cart__price-to';
        priceTo.innerHTML = product.cost.to;
        
        const p = document.createElement('p');
        p.innerHTML ='-';

        const buyButton = document.createElement('button');
        buyButton.className = 'c-product-cart__buy-button';
        buyButton.innerHTML = 'Mua ngay';

        price.appendChild(priceFrom);
        price.appendChild(p);
        price.appendChild(priceTo);
        
        infor.appendChild(name);
        infor.appendChild(price);
        infor.appendChild(buyButton);

        productDiv.appendChild(thumbnail);
        productDiv.appendChild(infor);

        productList.appendChild(productDiv);
    })
    return productList;
}

export const renderCart = async () => {
    const userInfor = await getUser(1);
    const userCart = document.getElementById('l-cart');
    userCart.appendChild(renderHeader(userInfor));
    userCart.appendChild(document.createElement('hr'));
    userCart.appendChild(renderProducts(userInfor));
    
}