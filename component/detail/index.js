import { renderDetail } from './Render.js';
import { setIndex } from './State.js';

export const displayDetail = (index) => {
    setIndex(index);
    renderDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}