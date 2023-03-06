import createElement from "../tools/elementCreator.js"


const switchComp = () => {


    let switchDiv = createElement('div', ['switch', 'component'])
    switchDiv.innerHTML = `
    <h1>Switch page:</h1>
    <button class='changeBackgroundColor'> Switch background color</button>
    <br>
    <br>
    <img src='./img/switch/switch1.png'/></img>
    <ol>
        <li>SWITCH is similar to IF. You give argument (input) to switch parameter and switch checks "input" value against each case. If case is a match switch initiate that case body code and breaks. If case is not found - default is initiated</li>
        <li>In this case switch initiated when button is clicked.</li>
        <li>In this case i replace initial value of INPUT to different value  so button would toggle through colors of each case every time button is clicked</li>
    </ol>
    `
    
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