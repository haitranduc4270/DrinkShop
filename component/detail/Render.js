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
    name.className = 'name';
    infor.appendChild(name);

    const costFrom = document.createElement('p');
    const costTo = document.createElement('p');
    costFrom.innerHTML = product.cost.from + '  -  ';
    costTo.innerHTML = product.cost.to;
    cost.appendChild(costFrom);
    cost.appendChild(costTo);
    cost.className = 'cost';
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
    color.className = 'color';
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
    size.className = 'size';
    infor.appendChild(size);

    const stateHeader = document.createElement('span');
    stateHeader.innerHTML = 'Trạng thái : ';
    state.appendChild(stateHeader);
    
    const displayState = document.createElement('p');
    displayState.id = 'displayState';
    displayState.innerHTML = 'Còn hàng';
    state.appendChild(displayState);
    state.className = 'state';
    infor.appendChild(state);

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = 'Thêm vào giỏ hàng';
    addToCartButton.className = 'add-to-cart';
    const buyButton = document.createElement('button');
    buyButton.innerHTML = 'Mua ngay';
    buyButton.className = 'buy';
    action.appendChild(addToCartButton);
    action.appendChild(buyButton);
    action.className = 'action';
    infor.appendChild(action); 

    infor.className = 'infor';

    thumbnail.src = product.thumbnail;
    productInfor.appendChild(thumbnail);
    productInfor.appendChild(infor);
    productInfor.className = 'product-infor';
    return productInfor;
}

const renderProductDetail = (product) => {
    const productDetail = document.createElement('div');
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = 'CHI TIẾT SẢN PHẨM';
    productDetail.appendChild(header);

    product.detail.map((property) => {
        const propertyDiv = document.createElement('div');
        const name = document.createElement('div');
        const value = document.createElement('div');
        name.innerHTML = property.name;
        value.innerHTML = property.value;
        propertyDiv.className = 'property';
        name.className = 'name';
        value.className = 'value';
        propertyDiv.appendChild(name);
        propertyDiv.appendChild(value);
        productDetail.appendChild(propertyDiv);
    })

    productDetail.className = 'product-detail';
    return productDetail;
}

const renderProductDes = (product) => {
    const productDescription = document.createElement('div');
    const header = document.createElement('div');
    const description = document.createElement('div');
    header.innerHTML = 'MÔ TẢ SẢN PHẨM';
    description.innerHTML = product.description;

    header.className = 'header';
    description.className = 'description';
    productDescription.className = 'product-description';
    
    productDescription.appendChild(header);
    productDescription.appendChild(description);
    return productDescription;
}

export const renderDetail = async () => {
    const product = await getProduct(getIndex());
    setIndex(product.index);

    const bodyDetail = document.createElement('div');
    bodyDetail.id = 'body-detail';
    bodyDetail.className = 'body-detail';

    const productInfor = document.createElement('div');
    productInfor.id = 'product-infor';
    productInfor.className = 'product-infor';
    productInfor.appendChild(renderProductInfor(product.data));

    const productDetail = document.createElement('div');
    productDetail.id = 'product-detail';
    productDetail.className = 'product-detail';
    productDetail.appendChild(renderProductDetail(product.data));

    const productDescription = document.createElement('div');
    productDescription.id = 'product-description';
    productDescription.className = 'product-description';
    productDescription.appendChild(renderProductDes(product.data));

    bodyDetail.appendChild(productInfor);
    bodyDetail.appendChild(productDetail);
    bodyDetail.appendChild(productDescription);

    const content = document.getElementById('content');
    if(content.childNodes.length <= 0) {
        content.appendChild(bodyDetail);
    }
    else {
        content.replaceChild(bodyDetail, content.childNodes[0]);
    }
}

