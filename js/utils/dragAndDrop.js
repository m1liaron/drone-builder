import {createDocumentElement} from "./utils.js";
import {droneValues} from "../constants/drone.js";
import {createDronePart} from "../components/partPanel.js";

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
        const part__image = draggedPart.querySelector('.part__image');

        const partType = draggedPart.dataset.type;

        if(partType !== 'frame') {
            if(!Object.keys(droneValues.frame).length) {
                alert("Please add a frame first before adding other parts.");
                return;
            }
        } else {
            droneValues.frame = {
                name: draggedPart.id,
            }
            droneContainer.innerHTML = '';
            droneContainer.appendChild(draggedPart);
            draggedPart.classList.remove('part__container');
            draggedPart.classList.add('frame__container')

            part__image.classList.add('drone__image-container');
        }

        if(partType === 'motor') {
            if(!Object.keys(droneValues.motor).length) {
                createMotor('top-left');
                createMotor('top-right');
                createMotor('bottom-left');
                createMotor('bottom-right');
                droneValues.motor = {
                    name: draggedPart.id,
                }
            } else {
                const currentFrame = document.querySelector('.frame__container');
                const motor = droneContainer.querySelector('.propeller');
                const motorElement = createDronePart({
                    name: currentFrame.id,
                    type: currentFrame.dataset.type,
                    image: motor.style.backgroundImage.slice(5,-2)
                });
                partsContainer.appendChild(motorElement);

                const motors = droneContainer.querySelectorAll('.propeller');
                motors.forEach(motor => {
                    motor.remove();
                });

                createMotor('top-left');
                createMotor('top-right');
                createMotor('bottom-left');
                createMotor('bottom-right');
            }
        }

        function createMotor(position) {
            const motorElement = createDocumentElement('div', `propeller ${position}`);
            motorElement.style.backgroundImage = `url("${part__image.src}")`
            draggedPart.remove();
            droneContainer.appendChild(motorElement);
        }
        draggedPart.classList.remove('dragging')
    })

}

export { dragAndDrop };