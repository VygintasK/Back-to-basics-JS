import myElementCreator from "../tools/myElementCreator.js";

let loopComp = () => {
    let cycleDiv = myElementCreator('div', ['loopComp', 'component'],'renderedContent')
    cycleDiv.innerHTML = `
        <h1>Cycle page</h1>
        <h2>For is the FATHER of all cycles</h2>
        <img src ='./img/cycle/cycle1.png' alt="basic cycle" />
        <span>expected: 1 2 3 4 5 6 7 8 9 10</span> (10 cycles)
        <ul>
            <li>i=1 - cycle start</li>
            <li>i<=10 - cycle end</li>
            <li>i++<></> - cycle step. Adding to next cycle meaning i=i+1 </li>
            <li>{ } - each cycle operation. In this case console.log(i) prints i value after each cycle</li>
        </ul>

        <h2>Array</h2>
        <p>Cycles to work with arrays</p>
        <img src ='./img/cycle/cycleArray.png' alt="array cycle" />
        <img src ='./img/cycle/cycleArrayConsole.png' alt="array cycle" />
        <p>Its a good practice to adapt cycle to the given array</p>
        <ul>
            <li><b>nameArr.length-1</b> - adapts cycle to array length. Cycle will be spined as many times as many array has elements</li>
            <li>nameArr.length<b>-1</b> - array index starts at 0 so length value needs to be corrected with <b>-1</b> because cycle will start at 0 as indicated by <b>i=0</b></li>
            <li><b>nameArr[i]</b> - each cycle value of "i" will change to "0; 1; 2; 3; 4;" making "console.log" to print different array element each cycle "console.log(nameArr[1]; console.log(nameArr[2]; console.log(nameArr[3];...etc." </li> 
        </ul>
    `



    // ---- basic CYCLE ----
    // for (let i = 1; i <= 10; i++) {
    //     console.log(i)
    // }

    // let arrBasic1 = []
    // for (let i = 1; i <= 10; i=i+3) { //changing step every 3
    //     arrBasic1.push(i)
    // }
    // console.log(arrBasic1)


    // let arrBasic2 = []
    // for (let i = 1; i <= 10; i=i+3) {
    //     arrBasic2.push(i+'foo') // adding something to each cycle
    // }
    // console.log(arrBasic2)



    // ---- Working with array ----

    // let nameArr = ["Tom", "John", "Kate", "Ted", "Dick"]
    // console.log('array values: ',nameArr)
    // console.log('array length: ', nameArr.length)           // expected 5 - but remember array starts at 0

    //                                                         //its good practice to adapt cycle to array
    //                                                         //array has index it starts at 0
    //                                                         //array has length
    // for (let i = 0; i<=nameArr.length-1; i++) {             // - 1 is correction because array starts at 0 so 0;1;2;3;4; - five elements indexes
    //     console.log(nameArr[i])                             // every cycle "i" changes value so every cycle different array element is displayed
    // }

    // for (let i = 1; i <= 5; i++){
    //     console.log(i-1)                                    // range correction like for array length can be done in body 
    // }



    // ---- MATH ----

    // for (let i = 1; i <= 5; i++){
    //     // console.log(i*i)                                 // i square
    //     // console.log(i**2)                                // i square
    //     console.log(Math.pow(i,2))                          // i square
    // }

    // let a=1
    // a=a+1 //expected = 2
    // a+=1 //expected =2
    //a++ //expected =2
    // console.log(a)
    // 5%2=1 //takes part after the point and if its 0 answer 0 if anything else answer 1



    // FIZZ BUZZ
    // 1. Skaičius nuo 1 iki 100.
    // 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
    // 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
    // 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";



    // function fizzBuzz() {

    //     for (let i = 1; i <= 150; i++) {

    //         let fizz = i % 3 === 0
    //         let buzz = i % 5 === 0
    //         let biff = i % 7 === 0
    //         let fuzz = i % 9 === 0
    //         let bizz = i % 11 === 0

    //         if (fizz && buzz && biff){ console.log(i,'fizz buzz biff')}
    //         else if (fizz && buzz) { console.log(i,'fizz buzz')}
    //         else if (fizz && biff){ console.log(i,'fizz biff')}
    //         else if (biff && buzz){ console.log(i,'biff buzz')}
    //         else if (fizz) { console.log(i,'fizz') }
    //         else if (buzz) { console.log(i,'buzz') }
    //         else if (fuzz) { console.log(i,'fuzz') }
    //         else if (biff) { console.log(i,'biff')}
    //         else if (bizz) { console.log(i,'bizz')}
    //         else { console.log(i) }
    //     }
    // }
    // fizzBuzz()













}

export default loopComp