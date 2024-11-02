
function dragAndDrop() {
    const droneContainer = document.querySelector('.drone__container');
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
        const part = document.querySelector('.part__container');
        part.classList.add('drone__container')
        droneContainer.appendChild(part);
    })


    droneContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedPart  = document.querySelector('.part__container.dragging');
        const part__image = draggedPart.querySelector('.part__image');
        if(draggedPart) {
            droneContainer.innerHTML = '';
            droneContainer.appendChild(draggedPart);
            part__image.classList.add('drone__image-container');
            draggedPart.classList.remove('dragging')
        }
    })

}

export { dragAndDrop };