import myElementCreator from "../tools/myElementCreator.js"
const roadMapComp = () =>{
    const fundamentals = [
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
                    name: 'VAR-DECLARATION',
                    sub: [
                        { name: 'VAR' },
                        { name: 'LET' },
                        { name: 'CONST' }
                    ],
    
                },
                {
                    name: 'SCOPE',
                    sub: [
                        { name: 'GLOBAL-SCOPE' },
                        { name: 'FUNCTION-SCOPE' },
                        { name: 'BLOCK-SCOPE' }
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
                        { name: 'MAP-WEAKMAP' },
                        { name: 'SET-WEAKSET' },
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
                { name: 'DO-WHILE' },
                { name: 'FOR' },
                { name: 'BREAK-CONTINUE' },
                { name: 'FOR-IN' },
                { name: 'FOR-OFF' }
            ]
        },
        {
            name: 'CONTROL-FLOW',
            sub: [
                { name: 'IF-ELSE' },
                { name: 'SWITCH' },
                { name: 'TRY-CATCH-THROW' }
            ]
        },
        {
            name: 'EXPRESSIONS-AND-OPERATORS',
            sub: [
                { name: 'ASSIGNMENT-OPERATORS' },
                { name: 'ARITHMETIC-OPERATORS' },
                { name: 'LOGICAL-OPERATORS' },
                { name: 'CONDITIONAL-OPERATOR' },
                { name: 'COMPARISON-OPERATORS' },
                { name: 'RELATIONAL-OPERATORS' },
                { name: 'BITWISE-OPERATORS' },
                { name: 'STRING-OPERATORS' },
                { name: 'COMMA-OPERATOR' },
                { name: 'UNARY-OPERATORS' }
            ]
        },
        {
            name: 'FUNCTIONS',
            sub: [
                { name: 'DECLARATION' },
                { name: 'EXPRESSIONS' },
                { name: 'CALLING' },
                { name: 'PARAMETERS-ARGUMENTS' },
                { name: 'FUNC-SCOPE' },
                { name: 'ARROW' }
            ]
        }
    ]
    const advanced = [
        {
            name: 'ADVANCED-SCOPE',
        },
        {
            name: 'CLOSURE',
        },
        {
            name: 'CURRYING',
        },   
        {
            name: 'THIS',
            sub: [
                { name: 'IMPLICIT-BINDING' },
                { name: 'EXPLICIT-BINDING' },
                { name: 'NEW-BINDING' },
                { name: 'LEXICAL-BINDING' },
                { name: 'DEFAULT-BINDING' }
            ]
        },
        {
            name: 'PROTOTYPE',
        },
        {
            name: 'PROTOTYPAL-INHERITANCE',
        },
        {
            name: 'CLASS',
        },
        {
            name: 'ITERATORS',
        },
        {
            name: 'GENERATORS',
        },
        {
            name: 'EVENT-LOOP',
        },
        {
            name: 'ASYNCHRONOUS-JAVA-SCRIPT',
            sub: [
                { name: 'SET-TIMEOUT' },
                { name: 'SET-INTERVAL' },
                { name: 'CALLBACKS' },
                { name: 'PROMISES' },
                { name: 'ASYNC-AWAIT' }
            ]
        },
        {
            name: 'MODULE-SYSTEM',
            sub: [
                { name: 'CJS' },
                { name: 'ESM' },
                { name: 'IMPORT-EXPORT' },
                { name: 'DEFAULT-NAMED-EXPORT' },
            ]
        },
    ]
    const webAPI = [
        {
            name: 'DOM',
        },
        {
            name: 'XHR-FETCH',
        },
        {
            name: 'STORAGE',
        },
        {
            name: 'VIDEO-AUDIO',
        },
        {
            name: 'DRAWING-GRAPHICS',
        },
    ]

    myElementCreator('div','lists-wrap','body')

    myElementCreator('div',['fundamentals-wrap','list-wrap'],'lists-wrap')
    let fundamentalsTitle = myElementCreator('h2','fundamentals-title','fundamentals-wrap')
    fundamentalsTitle.textContent='FUNDAMENTALS:'
    renderUlElm(fundamentals,'fundamentals-wrap')

    myElementCreator('div',['advanced-wrap','list-wrap'],'lists-wrap')
    let advancedTitle = myElementCreator('h2','advanced-title','advanced-wrap')
    advancedTitle.textContent = 'ADVANCED:'
    renderUlElm(advanced,'advanced-wrap')
    
    myElementCreator('div',['webAPI-wrap','list-wrap'],'lists-wrap')
    let webAPITitle = myElementCreator('h2','webAPI-title','webAPI-wrap')
    webAPITitle.textContent = 'webAPI:'
    renderUlElm(webAPI,'webAPI-wrap')

    colorFundamentals()
    colorAdvanced()
    colorWebAPI()



    let roadMapElm=myElementCreator('img','road-map','body')
    roadMapElm.src="./img/roadMap/fundamentals.jpg"
}
export default roadMapComp

function colorFundamentals(){
    // RUNNING-JS
    colorGreenElement('SCRIPT-TAG',3)
    colorGreenElement('BROWSER-CONSOLE',2)
    colorGreenElement('LINK-EXTERNAL-FILES',3)

//VARIABLES
    //VAR-DECLARATION
        colorGreenElement('VAR',2)
        colorGreenElement('LET',3)
        colorGreenElement('CONST',3)
    //SCOPE
        colorGreenElement('GLOBAL-SCOPE',3)
        colorGreenElement('FUNCTION-SCOPE',3)
        colorGreenElement('BLOCK-SCOPE',2)
    //HOISTING
        colorGreenElement('HOISTING',1)

//TYPES-AND-STRUCTURES
    //DATA-TYPES
        colorGreenElement('UNDEFINED',2)
        colorGreenElement('BOOLEAN',3)
        colorGreenElement('NUMBER',3)
        colorGreenElement('BIG-INT',2)
        colorGreenElement('STRING',3)
        colorGreenElement('SYMBOL',1)
    //not really data-types
        colorGreenElement('NULL',2) // special value (means empty value but may have value later)
        colorGreenElement('OBJECT',3) // object
        colorGreenElement('FUNCTION',3) // function
    //DATA-STRUCTURES
        colorGreenElement('ARRAY',3)
        colorGreenElement(`MAP-WEAKMAP`,1)
        colorGreenElement(`SET-WEAKSET`,1)
        colorGreenElement('DATE',1)

//TYPE-CONVERSION
    colorGreenElement('EXPLICIT',2) // where you convert yourself like stringify
    colorGreenElement('IMPLICIT',2) //  where JS converts to work

//EQUALITY
    colorGreenElement('EQUALITY',3)

//LOOPS
    colorGreenElement('WHILE',1)
    colorGreenElement('DO-WHILE',1)
    colorGreenElement('FOR',3)
    colorGreenElement('BREAK-CONTINUE',1)
    colorGreenElement('FOR-IN',1)
    colorGreenElement('FOR-OFF',1)

//CONTROL-FLOW
    colorGreenElement('IF-ELSE',3)
    colorGreenElement('SWITCH',3)
    colorGreenElement('TRY-CATCH-THROW',1)
    let a=10
    console.log(a++)
//EXPRESSIONS-AND-OPERATORS
    colorGreenElement('ASSIGNMENT-OPERATORS',2)     // = += -= *= /= %= <<= >>>= &= ^= |=
    colorGreenElement('ARITHMETIC-OPERATORS',3)     // + - * / % ++ --
    colorGreenElement('LOGICAL-OPERATORS',3)        //&& || !(x==y)
    colorGreenElement('CONDITIONAL-OPERATOR',3)     // ternary  isTrue ? 'true' : 'not true'
    colorGreenElement('COMPARISON-OPERATORS',3)     // == != === !=== > < <= >=
    colorGreenElement('RELATIONAL-OPERATORS',3)     // < > <= >= == != === !== // expected true or false
    colorGreenElement('BITWISE-OPERATORS',1)        // no idea
    colorGreenElement('STRING-OPERATORS',2)         // +Concatenate and +=Concatenate Assignment for string
    colorGreenElement('COMMA-OPERATOR',1)           // , but not syntax no idea
    colorGreenElement('UNARY-OPERATORS',2)          // typeof void delete logical not (!)     unary plus (+)    unary negation (-)    bitwise not (~) 

//FUNCTIONS
    colorGreenElement('DECLARATION',3)              //function(){}
    colorGreenElement('EXPRESSIONS',3)              //let func = function(){}
    colorGreenElement('CALLING',2)
    colorGreenElement('PARAMETERS-ARGUMENTS',2)     
    colorGreenElement('FUNC-SCOPE',3)
    colorGreenElement('ARROW',3)                    // ()=>{}

}
function colorAdvanced(){
    // ADVANCED-SCOPE
    colorGreenElement('ADVANCED-SCOPE',2)

    //CLOSURE
    colorGreenElement('CLOSURE',1)

    //CURRYING
    colorGreenElement('CURRYING',1)

    //THIS
    colorGreenElement('THIS',1)

    //PROTOTYPE
    colorGreenElement('PROTOTYPE',1)

    //PROTOTYPAL-INHERITANCE
    colorGreenElement('PROTOTYPAL-INHERITANCE',1)

    //CLASS
    colorGreenElement('CLASS',2)

    //ITERATORS
    colorGreenElement('ITERATORS',1)

    //GENERATORS
    colorGreenElement('GENERATORS',1)

    //EVENT-LOOP
    colorGreenElement('EVENT-LOOP',2)

    //EVENT-LOOP
    colorGreenElement('EVENT-LOOP',2)

    //ASYNCHRONOUS-JAVA-SCRIPT
        colorGreenElement('SET-TIMEOUT',2)
        colorGreenElement('SET-INTERVAL',1)
        colorGreenElement('CALLBACKS',2)
        colorGreenElement('PROMISES',1)
        colorGreenElement('ASYNC-AWAIT',2)

    //MODULE-SYSTEM
        colorGreenElement('CJS',1)
        colorGreenElement('ESM',1)
        colorGreenElement('ESM',1)
        colorGreenElement('IMPORT-EXPORT',2)
        colorGreenElement('DEFAULT-NAMED-EXPORT',2)
}

function colorWebAPI(){
    colorGreenElement('DOM',3)
    colorGreenElement('XHR-FETCH',1)
    colorGreenElement('STORAGE',2)
    colorGreenElement('VIDEO-AUDIO',2)
    colorGreenElement('DRAWING-GRAPHICS',1)
}

function colorGreenElement(elmClassName,key) {
    let elm = document.querySelector(`.${elmClassName}`)
    switch (key) {
        case 1:
            elm.style.backgroundColor='red'
        break;
        case 2:
            elm.style.backgroundColor='yellow'
        break;
        case 3:
            elm.style.backgroundColor='lime'
        break;
    
        default:
            elm.style.backgroundColor='purple'
        break;
    }

    
}

function renderUlElm(arr,appendTo){
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
// alternative renderUlElm  long code
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