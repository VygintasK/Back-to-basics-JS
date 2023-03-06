
const createElement = function (elementName, className) {

    let element = document.createElement(elementName)

    if ((typeof className) === 'object') {
        element.classList.add(...(Object.values(className)))
    } else {
        element.classList.add(className)
    }

    return element
}

export default createElement