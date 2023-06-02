import './style.css';
import { init } from './scene';

const el = document.querySelector('.three');
const sceneFacade = init(el, 600, 600);
sceneFacade.animate()

const li = document.querySelectorAll('li');
for(const [index, node] of li.entries()) {
    node.addEventListener("mouseover", () => {
        const link = node.lastChild;
        link.focus();
        node.focus();
        sceneFacade.chooseVisibleMesh(index);
    })
}

