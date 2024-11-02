import {createDocumentElement} from "./utils.js";
import {droneValues} from "../constants/drone.js";

function dragAndDrop() {
    const workingArea = document.querySelector('.working__area');
    const partsContainer = document.querySelector('.parts__container');
    const droneContainer = createDocumentElement('div', 'drone__container');
    workingArea.appendChild(droneContainer);
    const partContainers = document.querySelectorAll('.part__container');

    partContainers.forEach(part => {
        part.addEventListener('dragstart', () => {
            part.classList.add('dragging');
        });
        part.addEventListener('dragend', () => {
            part.classList.remove('dragging');
        })
    });

    droneContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggedPart  = document.querySelector('.part__container.dragging');
    })


    droneContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedPart  = document.querySelector('.part__container.dragging');
        console.log(draggedPart)
        const part__image = draggedPart.querySelector('.part__image');

        const isFrame = draggedPart.dataset.type === 'frame'

        if(!Object.keys(droneValues.frame).length && !isFrame) {
            alert("Please add a frame first before adding other parts.");
            return;
        } else if(isFrame && Object.keys(droneValues.frame).length) {
            droneValues.frame = {
                name: draggedPart.id,
                type: draggedPart.type,
            }
        }


        if(draggedPart) {
            const droneContainerChild = droneContainer.children;
            if(droneContainerChild.length >= 1) {
                const currentPart = droneContainer.querySelector('.part__container');
                currentPart.classList.remove('drone__container')
                const currentPartImage = currentPart.querySelector('.part__image');
                currentPartImage.classList.remove('drone__image-container')
                partsContainer.appendChild(currentPart);
            }
            droneContainer.innerHTML = '';
            droneContainer.appendChild(draggedPart);
            if(isFrame) {
                droneValues.frame = {
                    name: draggedPart.id,
                }
            }

            part__image.classList.add('drone__image-container');
            draggedPart.classList.remove('dragging')
        }
    })

}

export { dragAndDrop };