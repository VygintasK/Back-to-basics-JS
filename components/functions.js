
const functionsFunc = () => {
    console.log('functions imported')
    // console.clear()

    console.log('<----- FUNCTION SYNTAX ----->')
    const logFunctionSyntax = () =>{

        function test1() { // Named function
            console.log('works1')
        }
        test1()


        let test2 = function namedFunction() { // Named function with assigned variable
            console.log('works2')              // that will act like function
        }
        test2()
        

        let test3 = function () {              // Anonymous function assigned variable
            console.log('works3')              // that will act like function
        }
        test3()
        

        let test4 = () => {                    // Anonymous arrow function assigned variable
            console.log('works4')
            return 2
        }
        test4()                                // Expected "works4"
        console.log(test4)                     // Expected function description
        

        let test5 = () => {                    // Anonymous arrow function assigned variable
            console.log('works5')              // performing function
            return 'i am returning 5'          // returning value
        }
        console.log(test5())                   // console.log needed to catch returning value


        let test6 = () => 'i am returning 6'   // Anonymous arrow function assigned variable
        console.log(test6())                   //instantly returning but also performing function
    }
    // logFunctionSyntax()
    // uncoment to see console.logs
}

export default functionsFunc




     

    /////////// ASYNC Functions use callback ()=>() maybe?/////

    // function sayHi(){
    //     console.log('hi')
    // }

    // function sayName(){
    //     console.log('Tom')
    // }

    // async function greeting(){
    //     console.log('---THIS IS GREETING---')
    //     setTimeout(()=>sayHi(),2000)
        
    //     return 'done'
    // }
    // sayName()
    // console.log(greeting())
    // greeting()

