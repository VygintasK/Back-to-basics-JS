import createElement from "../tools/elementCreator.js"


const switchComp = () => {


    let switchDiv = createElement('div', ['switch', 'component'])
    switchDiv.innerHTML = `
   <h1>Switch page:</h1>
   <button class='changeBackgroundColor'> Switch background color</button>
   <br>
   <br>
   <img src='./img/switch/switch1.png'></img>
   `
    document.body.append(switchDiv)


    let lightButton = document.querySelector(".changeBackgroundColor")
    lightButton.style.padding = '8px 15px'
    let input = 'dim'

    lightButton.addEventListener('click',()=> {
        switch (input) {
            case 'dark':
                document.body.style.backgroundColor = 'black'
                document.body.style.color = 'white'
                input = 'light'
            break;
            case 'dim':
                document.body.style.backgroundColor = 'grey'
                document.body.style.color = 'black'
                input = 'dark'
            break;
            case 'light':
                document.body.style.backgroundColor = 'white'
                document.body.style.color = 'black'
                input = 'dim'
            break;
            default:
                console.log('ERROR - input do not match any case')
            break;
        }
    })


}
export default switchComp



// switch examples

// lightButton
// onclick=buttonLight






// let color = 'red'
// let result
// switch (color) {
//     case 'red':
//         result = 'STOP!'
//     break
//     case 'yellow':
//         result = 'get ready'
//     break
//     case 'green':
//         result = 'can walk'
//     break
//     default:
//         result = 'wrong input';
//     break
// }
// console.log(result)




// function rateGrade(grade) {
//     let gradeInWord = '';
//     switch (grade) {
//         case 1:
//         case 2:
//             gradeInWord = 'Labai blogai';
//             break;
//         case 3:
//         case 4:
//             gradeInWord = 'Blogai';
//             break;
//         case 5:
//         case 6:
//             gradeInWord = 'Vidutiniškai';
//             break;
//         case 7:
//         case 8:
//             gradeInWord = 'Gerai';
//             break;
//         case 9:
//         case 10:
//             gradeInWord = 'Labai gerai';
//             break;
//         default:
//             gradeInWord = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
//     }
//     return gradeInWord
// }
// console.log(rateGrade(5))