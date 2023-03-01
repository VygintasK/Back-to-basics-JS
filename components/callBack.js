import createElement from '../tools/elementCreator.js'
const callBackFunc = () => {
    let callbackDiv = createElement('Div','Callback')
    document.body.append(callbackDiv)
    callbackDiv.innerHTML = `
        <h1>Call Back page</h1>
        <h2>Function passing</h2>
        <ul>
            <li>
                <p>Function is like object, you can pass it to variable and make variable behave like function </p>
                <h4>Example 1:</h4>
                <img src="./img/callback/example1.png" alt="callback function"> 
            </li>
            <li> 
                <p>Function "count" can be used through function parameter "anyFunk" making count=anyFunk</p>
                <h4>Example 2:</h4>
                <img src="./img/callback/example2.png" alt="callback function"> 
            </li>
            <li>
                <p>More examples of complex looking function passing</p>
                <h4>Example 3.1:</h4>
                <img src="./img/callback/example3.1.png" alt="callback function"> 
            </li>
            <li>
                <p>More examples of complex looking function passing</p>
                <h4>Example 3.2:</h4>
                <img src="./img/callback/example3.2.png" alt="callback function"> 
            </li>
            <li>
                <p>More examples of complex looking function passing</p>
                <h4>Example 3.3:</h4>
                <img src="./img/callback/example3.3.png" alt="callback function"> 
            </li>
            <li>
                <p>More examples of complex looking function passing</p>
                <h4>Example 3.4:</h4>
                <img src="./img/callback/example3.4.png" alt="callback function"> 
            </li>
            <li>
                <p>CALLBACK passing function to other function. (see code Example 3.1 - 3.4)</p>
  
                <img src="./img/callback/callbackMore1.png" alt="callback more examples 1">
                <img src="./img/callback/callbackMore2.png" alt="callback more examples 2">
            </li>
        </ul>
        
        <h2>callback function and stacking</h2>
        <ul>
            <li>
                <p>"projectCallback" will not wait for delayed jobs and will continue other jobs. Delayed job will be printed when its done.</p>
                <h4>Example 4:</h4>
                <img src="./img/callback/example4.png" alt="callback function"> 
                <img src="./img/callback/example4console.png" alt="callback function"> 
            </li>
            <img src="./img/callback/callbackAnimated.gif" alt="callback animation"> 
            
        </ul>
    
    `
}
export default callBackFunc





console.log('<----- FUNCTION PASSING ----->')
const logPassingFunction = () => {


    console.log('<-----EXAMPLE 1----->')

    function printFunc(parameter) {
        console.log(parameter)
    }
    printFunc('zzz')

    const printVar = printFunc                // EQUAL means they use same "printFunc" body 
    printVar('zzz')

    console.log(printFunc)                     //  both print same function parameters
    console.log(printVar)


    console.log('<-----EXAMPLE 2----->')

    function countFunc(value1, value2) {
        console.log(value1 + value2);  
    }
    
    function callbackFunc1(parameter) {      //This is same as above passing "countFunc" to "parameter"(variable) making "parameter" behave as "countFunc"
        console.log('waiting')
        parameter(1, 2)
        countFunc(1, 2)                      // "parameter" act the same as "countFunc"
    }

    callbackFunc1(countFunc)


    console.log('<-----EXAMPLE 3.1----->')

    function useCallback2(parameter) {
        parameter("Albert")
    }
    useCallback2((name)=>console.log(name))
    

    console.log('<-----EXAMPLE 3.2----->')

    function useCallback3(parameter) {
        parameter("John", "Smith")
    }
    useCallback3(function hobo(a, b) {
        console.log(a, 'Doe', b)
    })


    console.log('<-----EXAMPLE 3.3----->')

    function useCallback4(parameter) {
        parameter("John", "Smith")
    }
    useCallback4((a, b) => console.log(a, 'Doe', b))


    console.log('<-----EXAMPLE 3.4----->')

    function print2(p1,p2,p3){
        console.log(p1,p2,p3)
    }

    function useCallback5(parameter) {
        parameter("John", "Smith")
    }

    useCallback5((a, b) => print2(a, 'Doe', b))


    console.log('<-----EXAMPLE 4----->')

    function job1() {
        console.log('job1 done')
    }
    function job2() {
        console.log('job2 done')
    }
    function job3() {
        console.log('job3 done')
    }
    function projectCallback(param1,param2,param3){
        param1()
        setTimeout(() => {param2()}, "1000")            // "projectCallback" will not wait for delayed jobs and will continue other jobs. Delayed job will be printed when its done.
        param3()
    }
    projectCallback(job1,job2,job3)                     // feeding jobs(arguments) using param variables of a function.

}
logPassingFunction()





// const a = 2
// let b = 4
// a=8
// b=8
// console.log(a,b)

// let c=[1,2,3]
// const d={num1:'1',num2:'2'}
// d=3
// console.log(c,d)


// TIMEOUT EXAMPLE
// setTimeout(() => {
//     console.log('Delayed action');
//   }, "2000")