
function createDocumentElement(
    tag,
    className,
    textContent,
) {
    const element = document.createElement(tag);
    if(className) element.className = className;
    if(tag) element.textContent = textContent;
    return element;
}

export { createDocumentElement };