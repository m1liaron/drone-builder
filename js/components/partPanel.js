import { createDocumentElement } from "../utils/utils.js";
import {DroneParts} from "../config/parts.js";

function createPartPanel () {
    const partsContainer = document.querySelector('.parts__panel__container')
    const container = createDocumentElement('div', 'parts__container');
    Object.values(DroneParts).map(item => item.map(part => {
        const drone = createDronePart(part);
        container.appendChild(drone);
    }))

    partsContainer.appendChild(container);
}

function createDronePart(item) {
    const div = createDocumentElement('div', 'part__container');
    const img = createDocumentElement('img', 'part__image');
    img.src = item.image;
    div.appendChild(img);
    return div;
}

export { createPartPanel };