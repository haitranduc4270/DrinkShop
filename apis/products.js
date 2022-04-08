const baseURL = 'http://localhost:3000/';

export const getProducts = async function () {
    const data = await (await fetch(baseURL + 'products')).json();
    return data;
}

export const getProduct = async function (index) {
    const data = await (await fetch(baseURL + 'products')).json();
    const product = {
        data : data[index],
        index : index,
    }
    return product;
}



