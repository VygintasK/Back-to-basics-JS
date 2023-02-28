const callBackFunc = () => {
    console.log('callBack imported')



    // console.log('--- example1 async---')
    // setTimeout(
    //     function work1(){
    //         console.log('work1 done')
    //     }    
    // ,1000)

    // function work2(){
    //     console.log('work2 done')
    // }
    // work2()




    console.log('<----- FUNCTION PASSING ----->')
    const logPassingFunction = () => {

        //EXAMPLE1
        function print(value) {
            console.log(value)
        }

        const printZZZ = print        // can pass parameters of function (print) like object to variable(printZZZ) the use variable like function
        printZZZ('zzz')

        //EXAMPLE2
        function count(value1, value2) {
            console.log(value1 + value2)
        }

        function useCallback1(anyFunc) {      //This is same as above passing function parameters to variable (anyFunc) making it behave as function(Count)
            anyFunc(1, 2)
        }
        useCallback1(count)


        //EXAMPLE3.1
        function useCallback2(anyFunc) {
            anyFunc("Albert")
        }
        useCallback2((name)=>console.log(name))


        
        //EXAMPLE3.2
        function useCallback3(anyFunc) {
            anyFunc("John", "Smith")
        }

        useCallback3(function hobo(a, b) {
            console.log(a, 'Doe', b)
        })


        //EXAMPLE3.3
        function useCallback4(anyFunc) {
            anyFunc("John", "Smith")
        }
        useCallback4((a, b) => console.log(a, 'Doe', b))


        //EXAMPLE3.4
        useCallback5((a, b) => print2(a, 'Doe', b))

        function print2(p1,p2,p3){
            console.log(p1,p2,p3)
        }

        function useCallback5(anyFunc) {
            anyFunc("John", "Smith")
        }

        






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


}

export default callBackFunc