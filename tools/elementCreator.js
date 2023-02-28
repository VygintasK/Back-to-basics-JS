
const createElement = function (elementName, className) {
    let element = document.createElement(elementName)
    element.classList.add(className)
    return element
}

export default createElement