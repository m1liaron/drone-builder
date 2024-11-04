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

        const partType = draggedPart.dataset.type;

        if(partType === 'frame') {
            if(Object.keys(droneValues.frame).length) { // If frame already exist
                returnCurrentPartToPanel('frame__container');

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
        function createMotor(position) {
            const motorElement = createDocumentElement('div', `propeller ${position}`);
            motorElement.style.backgroundImage = `url("${partImage.src}")`
            draggedPart.remove()    ;
            droneContainer.appendChild(motorElement);
        }

        if(partType === 'battery') {
            if(!Object.keys(droneValues.battery).length) {
                addPartToDroneContainer('battery', 'battery');
            } else {
                returnCurrentPartToPanel('battery');

                addPartToDroneContainer('battery', 'battery');
            }
        }

        if(partType === 'controller') {
            if(!Object.keys(droneValues.controller).length) {
                addPartToDroneContainer('controller', 'controller');
            } else {
                returnCurrentPartToPanel('controller');

                addPartToDroneContainer('controller', 'controller');
            }
        }

        if(partType === 'videoAntenna') {
            if(!Object.keys(droneValues.videoAntenna).length) {
                addPartToDroneContainer('videoAntenna', 'video__antenna');
            } else {
                returnCurrentPartToPanel('video__antenna');

                addPartToDroneContainer('videoAntenna', 'video__antenna');
            }
        }

        if(partType === 'radioModule') {
            if(!Object.keys(droneValues.radioModule).length) {
                addPartToDroneContainer('radioModule', 'radio__module');
            } else {
                returnCurrentPartToPanel('radio__module');

                addPartToDroneContainer('radioModule', 'radio__module');
            }
        }

        if(partType === 'camera') {
            if(!Object.keys(droneValues.camera).length) {
                addPartToDroneContainer('camera', 'camera');
            } else {
                returnCurrentPartToPanel('camera');

                addPartToDroneContainer('camera', 'camera');
            }
        }


        function returnCurrentPartToPanel(className) {
            const currentPart = droneContainer.querySelector(`.${className}`);
            const currentPartImage = droneContainer.querySelector(`.${className} img`);
            currentPart.classList.remove(className);
            currentPartImage.classList.remove('drone__image-container');
            partsContainer.appendChild(currentPart);
        }

        function addPartToDroneContainer(type, partClassName) {
            droneValues[type] = {
                name: draggedPart.id,
            }

            droneContainer.appendChild(draggedPart);
            draggedPart.classList.add(partClassName)
            partImage.classList.add('drone__image-container');
        }

        createCostPanel()
        draggedPart.classList.remove('dragging')
    })

}

export { dragAndDrop };