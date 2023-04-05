import myElementCreator from "../tools/myElementCreator.js"
const roadMapComp = () =>{
    const roadMapArr = [
        {
            name: 'RUNNING-JS',
            sub: [
                { name: 'SCRIPT-TAG' },
                { name: 'BROWSER-CONSOLE' },
                { name: 'LINK-EXTERNAL-FILES' }
            ]
        },
        {
            name: 'VARIABLES',
            sub: [
                {
                    name: 'DECLARATION',
                    sub: [
                        { name: 'VAR' },
                        { name: 'LET' },
                        { name: 'CONST' }
                    ],
    
                },
                {
                    name: 'SCOPE',
                    sub: [
                        { name: 'GLOBAL' },
                        { name: 'FUNCTION' },
                        { name: 'BLOCK' }
                    ],
                },
                {
                    name: 'HOISTING',
                }
            ],
        },
        {
            name: 'TYPES-AND-STRUCTURES',
            sub: [
                {
                    name: 'DATA-TYPES',
                    sub: [
                        { name: 'UNDEFINED' },
                        { name: 'BOOLEAN' },
                        { name: 'NUMBER' },
                        { name: 'BIG-INT' },
                        { name: 'STRING' },
                        { name: 'SYMBOL' },
                        { name: 'NULL' },
                        { name: 'OBJECT' },
                        { name: 'FUNCTION' }
                    ]
                },
                {
                    name: 'DATA-STRUCTURES',
                    sub: [
                        { name: 'ARRAY' },
                        { name: 'MAP/WEAK-MAP' },
                        { name: 'SET/WEAK-SET' },
                        { name: 'DATE' }
                    ]
                }
            ]
        },
        {
            name: 'TYPE-CONVERSION',
            sub: [
                { name: 'EXPLICIT' },
                { name: 'IMPLICIT' }
            ]
        },
        {
            name: 'EQUALITY',
            sub: [
                { name: '==vs===' }
            ]
        },
        {
            name: 'LOOPS',
            sub: [
                { name: 'WHILE' },
                { name: 'DO...WHILE' },
                { name: 'FOR' },
                { name: 'BREAK/CONTINUE' },
                { name: 'FOR...IN' },
                { name: 'FOR...OFF' }
            ]
        },
        {
            name: 'CONTROL-FLOW',
            sub: [
                { name: 'IF...ELSE' },
                { name: 'SWITCH' },
                { name: 'TRY/CATCH/THROW' }
            ]
        },
        {
            name: 'EXPRESSIONS-AND-OPERATORS',
            sub: [
                { name: 'ASSIGNMENT' },
                { name: 'ARITHMETIC' },
                { name: 'LOGICAL' },
                { name: 'CONDITIONAL' },
                { name: 'COMPARISON' },
                { name: 'RELATIONAL' },
                { name: 'BITWISE' },
                { name: 'STRING' },
                { name: 'COMMA' },
                { name: 'UNARY' }
            ]
        },
        {
            name: 'FUNCTIONS',
            sub: [
                { name: 'DECLARATION' },
                { name: 'EXPRESSIONS' },
                { name: 'CALLING' },
                { name: 'PARAMETERS&ARGUMENTS' },
                { name: 'SCOPE' },
                { name: 'ARROW' }
            ]
        }
    ]
    renderUlElm(roadMapArr,'body')






    let roadMapElm=myElementCreator('img','road-map','body')
    roadMapElm.src="./img/roadMap/fundamentals.jpg"


}
export default roadMapComp

let renderUlElm=(arr,appendTo)=>{
    let ulElm = myElementCreator('ul', `ul-WRAP`,appendTo)
    arr.forEach(element => {
        let liElm = myElementCreator('li',`${element.name}`)
        liElm.textContent=element.name
        ulElm.append(liElm)

        if (element.sub) {
        renderUlElm(element.sub,liElm.className)
        }
    })
}
// alternative long renderUl code
// myElementCreator('ul', 'FUNDAMENTALS-WRAP', 'body')
// roadMapArr.forEach(fundamentals => {
//     let categoryLi = myElementCreator('li', fundamentals.name, 'FUNDAMENTALS-WRAP')
//     categoryLi.textContent = fundamentals.name


//     let subCategoryUl = myElementCreator('ul', `${fundamentals.name}-WRAP`, fundamentals.name)
//     fundamentals.sub.forEach(subElement => {
//         let subLi = myElementCreator('li', subElement.name)
//         subLi.textContent = subElement.name
//         subCategoryUl.append(subLi)


//         if (subElement.sub) {


//             let subSubUl = myElementCreator('ul', `${subElement.name}-WRAP`, subElement.name)
//             subElement.sub.forEach(newElement => {
//                 let newLi = myElementCreator('li',newElement.name)
//                 newLi.textContent = newElement.name
//                 subSubUl.append(newLi)
//             });
//         }
//     })
// })