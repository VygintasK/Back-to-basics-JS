import createElement from '../tools/elementCreator.js'

const scope = () => {

    let scopeDiv = createElement('div','Scope')
    scopeDiv.innerHTML = `
        <h1>4 types of scopes:</h1>
        <ul>
            <li>
                <h3>Global scope</h3>
                <ul>
                    <li>
                        <p>Accessible inside every sub scope.</p>
                        <h4>Example:</h4>
                        <p>Function scope can access local "a" and global "b"</p>
                        <p>BUT global scope can NOT access b inside function scope</p>
                        <img src="/img/scopeImg/globalScope1.png"></img>
                        <br></br>
                    </li>
                    <li>
                        <p>Variable can be accessed in another component(file) as long as parent file as global (non modular script) with that variable.</p>
                        <p>Modular scrips protect from bleeding variable access into children files.</p>
                        <h4>Example:</h4>
                        <p>Calling "console.log(global)" inside of "components/nav.js"</p>
                        <img src="/img/scopeImg/global21.png"></img>
                        <p>"nav.js" is imported into "js/scope.js"</p>
                        <img src="/img/scopeImg/global22.png"></img>
                        <p>"scope.js" happens to be script for "scopePage.html"</p>
                        <p>"scopePage.html" also using GLOBAL NON MODULAR script "global/nonModuleScope.js"</p>
                        <img src="/img/scopeImg/global23.png"></img>
                        <p>"nonModuleScope.js" has variable "global"</p>
                        <img src="/img/scopeImg/global24.png"></img>
                        <p>You get print out of variable that doesn't exist in NAVIGATION but you get this only by accessing page that uses global non modular script</p>
                        <img src="/img/scopeImg/global25.png"></img>
                        <p><strong>To avoid confusion - use module scripts</strong></p>
                    </li>              
                </ul>
                <br></br>
                

                
            </li>
            <li>
                <h3>Module scope</h3>
                <p>Accessible inside that JS module file</p>
                <img src="/img/scopeImg/module.png"></img>
            </li>
            <li>
                <h3>Block scope</h3>
                <p>Pretty much everything separated by { }</p>
                <p>Global scope can not access "b" inside block</p>
                <img src="/img/scopeImg/block.png"></img>
            </li>
            <li>
                <h3>Functional scope</h3>
                <p>Pretty much everything separated by function{ } and is only relevant when you use var ("let" and "const" are OK)</p>
                <img src="/img/scopeImg/function1.png"></img>
                <img src="/img/scopeImg/function2.png"></img>
            </li>
        </ul>
    `
    document.body.append(scopeDiv)
}
export default scope

// // -- example Global --
// console.log(global) 
// // -- this is accessing "global/nonModuleScope.js and getting variable "global" because nonModuleScope.js imported as non Module script


// // -- example Module--
// // -- variables in THIS script (file) can be accessed only in this file (unless exported) 


// // -- example Block scope --
// const a = 1
// if (a) {                                // -- function scope
//     const b = 1
//     console.log("block scope:",a,b)     // -- can access module scope and block scope to get a,b 
// }
// console.log("global scope:",a,b)        // -- can not access function scope to get b


// // -- example Function scope --
// function test1() {                      // -- function scope
//     const b = 1
//     if (true) {
//         var c = 2
//     }
//     console.log("function scope:",b,c)  // -- can access module scope and function scope to get a,b 
// }
// test1()