import { getIndex, setIndex } from "./State.js";
import { getProduct } from "../../apis/products.js";

const renderProductInfor = (product) => {
    const productInfor = document.createElement('div');
    const thumbnail = document.createElement('img');
    const infor = document.createElement('div');
    const name = document.createElement('div');
    const cost = document.createElement('div');
    const color = document.createElement('div');
    const size = document.createElement('div');
    const state = document.createElement('div');
    const action = document.createElement('div');
    
    name.innerHTML = product.name;
    name.className = 'c-infor__name';
    infor.appendChild(name);

    const costFrom = document.createElement('p');
    const costTo = document.createElement('p');
    costFrom.innerHTML = product.cost.from + '  -  ';
    costTo.innerHTML = product.cost.to;
    cost.appendChild(costFrom);
    cost.appendChild(costTo);
    cost.className = 'c-infor__cost';
    infor.appendChild(cost);

    const colorHeader = document.createElement('span');
    colorHeader.innerHTML = 'Màu sắc :';
    color.appendChild(colorHeader);
    product.color.map((eachColor, index) => {
        const button = document.createElement('button');
        button.innerHTML = eachColor;
        button.id = 'colorButton' + index;
        //button.onclick = onClickColor;
        color.appendChild(button);  
        // colorStates.push({
        //     id : 'colorButton' + index,
        //     state : false,
        // })
    })
    color.className = 'c-infor__color';
    infor.appendChild(color);

    const sizeHeader = document.createElement('span');
    sizeHeader.innerHTML = 'Size :';
    size.appendChild(sizeHeader);
    product.sizeList.map((eachSize, index) => {
        if(eachSize.number >= 0) {
            const button = document.createElement('button');
            button.innerHTML = eachSize.size;
            button.id = 'sizeButton' + index;
            //button.onclick = onClickSize;
            size.appendChild(button);
            // sizeStates.push({
            //     id : 'sizeButton' + index,
            //     state : false,
            // })
        }
    
    })
    size.className = 'c-infor__size';
    infor.appendChild(size);

    const stateHeader = document.createElement('span');
    stateHeader.innerHTML = 'Trạng thái : ';
    state.appendChild(stateHeader);
    
    const displayState = document.createElement('p');
    displayState.id = 'displayState';
    displayState.innerHTML = 'Còn hàng';
    state.appendChild(displayState);
    state.className = 'c-infor__state';
    infor.appendChild(state);

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = 'Thêm vào giỏ hàng';
    addToCartButton.className = 'c-infor__add-to-cart';
    const buyButton = document.createElement('button');
    buyButton.innerHTML = 'Mua ngay';
    buyButton.className = 'c-infor__buy';
    action.appendChild(addToCartButton);
    action.appendChild(buyButton);
    action.className = 'c-infor__action';
    infor.appendChild(action); 

    infor.className = 'c-infor';

    thumbnail.src = product.thumbnail;
    productInfor.appendChild(thumbnail);
    productInfor.appendChild(infor);
    productInfor.className = 'c-detail-product';
    return productInfor;
}

const renderProductDetail = (product) => {
    const productDetail = document.createElement('div');
    const header = document.createElement('div');
    header.className = 'c-detail__header';
    header.innerHTML = 'CHI TIẾT SẢN PHẨM';
    productDetail.appendChild(header);

    product.detail.map((property) => {
        const propertyDiv = document.createElement('div');
        const name = document.createElement('div');
        const value = document.createElement('div');
        name.innerHTML = property.name;
        value.innerHTML = property.value;
        propertyDiv.className = 'c-property';
        name.className = 'c-property__name';
        value.className = 'c-property__value';
        propertyDiv.appendChild(name);
        propertyDiv.appendChild(value);
        productDetail.appendChild(propertyDiv);
    })

    productDetail.className = 'c-detail';
    return productDetail;
}

const renderProductDescription = (product) => {
    const productDescription = document.createElement('div');
    const header = document.createElement('div');
    const description = document.createElement('div');
    header.innerHTML = 'MÔ TẢ SẢN PHẨM';
    description.innerHTML = product.description;

    header.className = 'c-description__header';
    description.className = 'c-description__description';
    productDescription.className = 'c-description';
    
    productDescription.appendChild(header);
    productDescription.appendChild(description);
    return productDescription;
}

export const renderDetail = async () => {
    const product = await getProduct(getIndex());
    setIndex(product.index);

    const content = document.getElementById('content');
    
    const productInfor = renderProductInfor(product.data);
    const productDetail = renderProductDetail(product.data);
    const productDescription = renderProductDescription(product.data);

    if(content.childNodes.length <= 0) {
        content.appendChild(productInfor);
        content.appendChild(productDetail);
        content.appendChild(productDescription);
    }
    else {
        content.innerHTML = '';
        content.appendChild(productInfor);
        content.appendChild(productDetail);
        content.appendChild(productDescription);
    }
}

