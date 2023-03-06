import createElement from "../tools/elementCreator.js"

let initNav=()=>{

const nav = createElement('ul','nav')
nav.innerHTML = `
    <li id="home"><a href="./index.html">Home</a></li>

    <li id="refVal"><a href="./refValPage.html">Ref / Val</a></li>
    <li id="data"><a href="./data.html">Data</a></li>
    <li id="switch"><a href="./switch.html">Switch</a></li>

    <li id="scope"><a href="./scopePage.html">Scope</a></li>
    <li id="logic"><a href="./logic.html">Logic</a></li>


    <li id="functions"><a href="./functionsPage.html">Functions</a></li>
    <li id="callback"><a href="./callBackPage.html">Call Back</a></li>
    <li id="promises"><a href="./promisesPage.html">Promises</a></li>
    <li id="fetch"><a href="./fetchPage.html">Fetch</a></li>
    <li id="test"><a href="./testPage.html">Test</a></li>
`
document.body.prepend(nav)



}
export default initNav
// console.log(global) // this is for checking global var in scoping page


// /   = Root directory
// .   = This location
// ..  = Up a directory
// ./  = Current directory
// ../ = Parent of current directory
// ../../ = Two directories backwards

// console.dir(document.location.pathname)
// console.log(document.URL)
// console.log(document.location.origin)
// console.log(document.location.pathname)


