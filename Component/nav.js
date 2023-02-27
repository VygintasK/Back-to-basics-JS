let initNav=()=>{

let nav = document.createElement('ul') 
nav.classList.add('nav')

nav.innerHTML = `
    <li id="Home"><a href="../index.html">Home</a></li>
    <li id="RefVal"><a href="./refValPage.html">Ref / Val</a></li>
    <li id="RefVal"><a href="./scopePage.html">Scope</a></li>
    <li id="Functions"><a href="/Pages/functionsPage.html">Functions</a></li>
    <li id="Call-Back"><a href="/Pages/callBackPage.html">Call Back</a></li>
    <li id="Promises"><a href="/Pages/zzzz">Promises</a></li>
    <li id="Fetch"><a href="/Pages/fetchPage.html">Fetch</a></li>
    <li id="Fetch"><a href="/Pages/testPage">Test</a></li>
`
document.body.prepend(nav)
}

export default initNav

