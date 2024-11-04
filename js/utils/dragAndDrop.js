import {createDocumentElement} from "./utils.js";
import {droneValues} from "../constants/drone.js";
import {createDronePart} from "../components/partPanel.js";
import {createCostPanel} from "../components/costPanel.js";

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
        let draggedPart  = document.querySelector('.part__container.dragging');
        const partImage = draggedPart.querySelector('.part__image');
        const currentFrame = droneContainer.querySelector('.frame__container');
        const currentFrameImage = droneContainer.querySelector('.drone__image-container');

        const partType = draggedPart.dataset.type;

        if(partType === 'frame') {
            if(Object.keys(droneValues.frame).length) { // If frame already exist

                // return current frame to container
                currentFrame.classList.remove('frame__container');
                currentFrameImage.classList.remove('drone__image-container');
                partsContainer.appendChild(currentFrame);

                addPartToDroneContainer('frame', 'frame__container');
            } else {
                addPartToDroneContainer('frame', 'frame__container');
            }
        } else {
            if(!Object.keys(droneValues.frame).length) {
                alert("Please add a frame first before adding other parts.");
                return;
            }
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

        if(partType === 'battery') {
            if(!Object.keys(droneValues.battery).length) {
                droneValues.battery = {
                    name: draggedPart.id,
                }

                addPartToDroneContainer('battery', 'battery');
            } else {
                const currentBattery = droneContainer.querySelector('.battery');
                const currentBatteryImage = droneContainer.querySelector('.battery img');
                currentBattery.classList.remove('battery');
                currentBatteryImage.classList.remove('drone__image-container');
                partsContainer.appendChild(currentBattery);

                addPartToDroneContainer('battery', 'battery');
            }
        }

        function addPartToDroneContainer(type, partClassName) {
            droneValues[type] = {
                name: draggedPart.id,
            }

            droneContainer.appendChild(draggedPart);
            draggedPart.classList.add(partClassName)
            partImage.classList.add('drone__image-container');
        }

        if(partType === 'flightController') {
            if(!Object.keys(droneValues.controller).length) {
                droneValues.controller = {
                    name: draggedPart.id,
                }
                const controllerElement = createDocumentElement('div', 'controller');
                controllerElement.style.backgroundImage = `url("${partImage.src}")`

                droneContainer.appendChild(controllerElement);
                draggedPart.remove();
                draggedPart = controllerElement;
            }
        }

        if(partType === 'videoAntenna') {
            if(!Object.keys(droneValues.videoAntenna).length) {
                droneValues.videoAntenna = {
                    name: draggedPart.id,
                }
                const videoAntennaElement = createDocumentElement('div', 'video__antenna');
                videoAntennaElement.style.backgroundImage = `url("${partImage.src}")`

                droneContainer.appendChild(videoAntennaElement);
                draggedPart.remove();
                draggedPart = videoAntennaElement;
            }
        }

        function createMotor(position) {
            const motorElement = createDocumentElement('div', `propeller ${position}`);
            motorElement.style.backgroundImage = `url("${partImage.src}")`
            draggedPart.remove()    ;
            droneContainer.appendChild(motorElement);
        }
        createCostPanel()
        draggedPart.classList.remove('dragging')
    })

}

export { dragAndDrop };