import { getProducts } from '../../apis/products.js';
import { onClickProduct } from './EventHandler.js';

const loadData = async () => {
    const products = await getProducts();
    return products;
}
  
const renderBase = () => {
    const bodyLanding = document.createElement('div');
    bodyLanding.id = 'body-landing'
    bodyLanding.className = 'body-landing'

    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = 'Shop Flaves';

    const intro = document.createElement('div');
    intro.className = 'intro';
    intro.innerHTML = 'Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.';
    
    const productList = document.createElement('div');
    productList.id = 'product-list';
    productList.className = 'product-list';

    bodyLanding.appendChild(header);
    bodyLanding.appendChild(intro);
    bodyLanding.appendChild(productList);

    const content = document.getElementById('content');
    if(content.childNodes.length <= 0) {
        content.appendChild(bodyLanding);
    }
    else {
        content.replaceChild(bodyLanding, content.childNodes[0]);
    }
}

const onClick = (event) => {
    console.log(event);
}

const renderProduct = (good, index) => {
    const product = document.createElement('div');
    const thumbnail = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('div');
    const priceFrom = document.createElement('p');
    const priceP = document.createElement('p');
    const priceTo = document.createElement('p');
    
    product.className = 'product';

    thumbnail.className = 'thumbnail';
    thumbnail.src = good.thumbnail;

    name.className = 'name';
    name.id = index;
    name.onclick = onClickProduct;
    name.innerHTML = good.name;

    price.className = 'price';
    priceFrom.className = 'price-from';
    priceTo.className = 'price-to';
    priceFrom.innerHTML = good.cost.from;
    priceTo.innerHTML = good.cost.to;
    priceP.innerHTML = '-';

    product.appendChild(thumbnail);
    product.appendChild(name);
    price.appendChild(priceFrom);
    price.appendChild(priceP);
    price.appendChild(priceTo);
    product.appendChild(price);

    return product;
}

export const renderProductList = async () => {   
     
    const products = await loadData();
    renderBase();
    products.map((good, index) => {
        document.getElementById('product-list').appendChild(renderProduct(good, index));
    })

}


