import { displayDetail } from '../detail/index.js';

export const onClickProduct = (event) => {
    displayDetail(event.target.id);
    
}
