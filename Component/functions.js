
const functionsFunc = () => {
    console.log('functions imported')
    // console.clear()

    console.log('<----- FUNCTION SYNTAX ----->')
    const logFunctionSyntax = () =>{

        function namedFunction1() {
            console.log('works1')
        }
        namedFunction1()


        let test2 = function namedFunction2() {
            console.log('works2')
        }
        test2()
        

        let test3 = function () {
            console.log('works3')
        }
        test3()
        

        let test4 = () => {
            console.log('works4')
            return 2
        }
        test4()
        console.log(test4)
        

        let test5 = () => {
            console.log('works5')
            return 'i am returning 5'
        }
        console.log(test5())


        let test6 = () => 'i am returning 6'
        console.log(test6())
    }



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

