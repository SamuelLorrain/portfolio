import { init } from './scene';

const el = document.querySelector('.three');
const animate = init(el, 500, 500);
animate()

const li = document.querySelectorAll('li');
for(const i of li) {
    i.addEventListener("mouseover", () => {
        const link = i.lastChild;
        link.focus();
    })
}

