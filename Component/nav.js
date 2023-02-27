let initNav=()=>{

let nav = document.createElement('ul') 
nav.classList.add('nav')

nav.innerHTML = `
    <li id="Home"><a href="./index.html">Home</a></li>

    <li id="RefVal"><a href="./refValPage.html">Ref / Val</a></li>
    <li id="RefVal"><a href="./scopePage.html">Scope</a></li>


    <li id="Functions"><a href="./functionsPage.html">Functions</a></li>
    <li id="Call-Back"><a href="./callBackPage.html">Call Back</a></li>
    <li id="Promises"><a href="./promisesPage.html">Promises</a></li>
    <li id="Fetch"><a href="./fetchPage.html">Fetch</a></li>
    <li id="Fetch"><a href="./testPage.html">Test</a></li>
`
document.body.prepend(nav)
console.log(document.URL)
console.log(document.location.origin)
console.log(document.location.pathname)
}

export default initNav

// /   = Root directory
// .   = This location
// ..  = Up a directory
// ./  = Current directory
// ../ = Parent of current directory
// ../../ = Two directories backwards
console.log(document)