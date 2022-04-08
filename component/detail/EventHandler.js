export const onClickColor = (e) => {
    colorStates.map((colorState) => {
        if(colorState.id === e.target.id) {
            if(colorState.state) {
                e.target.setAttribute('style', 'border : 1px solid var(--color_6)');
                console.log(1);
                colorState.state = false;
            }
            else {
                e.target.setAttribute('style', 'border : 2px solid var(--color_3)'); 
                console.log(0);
                colorState.state = true;
            }
        }
    })
}


const onClickSize = (e) => {
    sizeStates.map((sizeState) => {
        document.getElementById(sizeState.id).setAttribute('style', 'border : 1px solid var(--color_6)');
    });
    sizeStates.map((sizeState) => {
        if(sizeState.id === e.target.id) {
            if(sizeState.state) {
                e.target.setAttribute('style', 'border : 1px solid var(--color_6)');
                sizeState.state = false;
            }
            else {
                e.target.setAttribute('style', 'border : 2px solid var(--color_3)'); 
                sizeState.state = true;
            } 
        }
    })
}

const onClickMinus = () => {
    if(numberState <= 0) return;
    document.getElementById("displayNumber").innerHTML = numberState - 1;
    numberState = numberState - 1;
}

const onClickAdd = () => {
    document.getElementById("displayNumber").innerHTML = numberState + 1;
    numberState = numberState + 1;
}

const onAddToCart = () => {

}

const onClickBuy = () => {

}

