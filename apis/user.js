const baseURL = 'http://localhost:3000/';

export const getUser = async function (index) {
    const data = await (await fetch(baseURL + 'users')).json();
    return data[index];
}



