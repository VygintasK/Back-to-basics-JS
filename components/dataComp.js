import createElement from "../tools/elementCreator.js"

const dataComp = () => {
    const identifyDiv = createElement('div', ['data', 'component'])
    identifyDiv.innerHTML = `
        <h1>Identify page:</h1>
        <h2>Data types:</h2>
        <ul>
            <li><h3>Primitive values:</h3></li>
            <ul style="text">
                <li><b>string</b> - string</li>
                <li><b>number</b> - number</li>
                <ul>
                    <li>integer (-2, -1, 0, 1, 2, 3)</li>
                    <li>float (-0.1, 2.3, 2e))</li>
                </ul>
                <li><b>boolean</b> - true or false</li>
                <li><b>undefined</b> - undefined - no value</li>
                <li><b>null</b> - null - no object </li>
                <li><b>symbol</b> - symbol</li>
                <li><b>bigInt</b> - is for number above safe js handling</li>
            </ul>
            <li><h3>Objects</h3></li>
            <ul>
                <li><b>Array</b> - [value1, value,2 value3]</li>
                <li><b>Object</b> - { key1:'value1', key2:'value2', key3:'value3'}</li>
                <li><b>JSON</b> - [{ "key1": "value1", "key2": "value2", "key3": "value3"}] - JSON is used for universal data exchange</li>
            </ul>
            <span>Derived data is new data created by combining and processing existing raw data.</span>
        </ul>
        <h2>Identifying:</h2>
        <ul>
            <li>
                <b>typeof value</b> - can tell data type
                <ul>
                    <li>undefined - undefined</li>
                    <li>boolean - boolean</li>
                    <li>number - number</li>
                    <li>string - string</li>
                    <li>bigint - bigint</li>
                    <li>symbol - symbol</li>
                    <li>function - function</li>
                    <li>object - object</li>
                    <li>array - <b>object</b></li>
                    <li>null - <b>object</b></li>
                    <li>NaN - <b>object</b></li>
                </ul>
            </li>
            <li><b>Array.isArray(value)</b> - can tell if array true/false</li> 
            <li><b>isNaN(value)</b> - can tell if NaN true/false</li> 
            <li><b>null === value</b> - can tell if Null true/false</li> 
            <li><b>undefined  === value</b> - can tell if undefined  true/false</li> 

        </ul>
       

    `
}
export default dataComp

let str = 'String'
let pars = '3.14 Number like string'
let flo = 3.14
let int = 5.5

let bool = true
let aNull = null
let aNaN = NaN
let Und = undefined

let arr = ['value1', 'value2', 'value3']
let obj = { key1: 'value1', key2: 'value2', key3: 'value3' }


console.log(typeof arr, typeof obj)
console.log(Array.isArray(arr))
console.log(isNaN(aNaN))
console.log(null === aNull)
console.log(undefined  === Und)




// console.log(fooPars.split('.'))
// console.log(typeof fooStr)
// console.log('is number not a number?', isNaN(fooStr))
// console.log('is object an array?', Array.isArray(fooArr))

// console.log('parse float?', parseFloat(fooPars))
// console.log('is number integer?', Number.isInteger(fooFlo))
// console.log('is number integer?', Number.isInteger(fooInt))




// console.log(isArray(fooArr))





// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// let a = Infinity
// console.log(Number.MAX_SAFE_INTEGER + 1)
// console.log(Number.MAX_SAFE_INTEGER + 2)
// console.log(Number.MAX_SAFE_INTEGER + 3)
// console.log(Number.MAX_SAFE_INTEGER + 2)
// console.log(a)
// console.log(Number.MIN_VALUE)
