
const myElementCreator = function (elementType, className, appendToClassName = null) {

    let element = document.createElement(elementType)

    //detects if its an array and extracts values
    //else just places given value
    if (Array.isArray(className)) {
        element.classList.add(...(Object.values(className)))
    } else {
        element.classList.add(className)
    }

    //detects if Class is given (true) then appends to that class
    //Class not give (null) appends to document body
    if (appendToClassName && appendToClassName==='body'){
        document.body.append(element)
    }
    else if (appendToClassName) {
        let appendTo = document.querySelector(`.${appendToClassName}`)
        appendTo.append(element)
    } 
    // else {
    //     console.log(className, '- not appended')  // this is needed for different projects
    // }

    return element
}

export default myElementCreator