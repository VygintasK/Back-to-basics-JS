import createElement from "../tools/elementCreator.js"

const switchExamplesComp = () =>{
    const switchExamplesDiv = createElement('div',['switchExamples','components'])
    switchExamplesDiv.innerHTML=`
        <h2>More examples: (see "switchExamplesComp" for code)</h2>
    `
  

    // //----COLOR----
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



    // //----GRADE----
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



    // //----STUDENT AGE----
    // function studentAge(personAge){
    //   switch (true) {
    //       case (isNaN(personAge)):
    //           mtext = 'Ne skaičius'
    //           break;
    //       case (personAge < 0):
    //           mtext = 'Amžius turi būti teigiamas skaičius'
    //           break;
    //       case (personAge < 6):
    //           mtext = 'Į mokyklą neeina'
    //           break;
    //       case (personAge < 7):
    //           mtext = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
    //           break;
    //       case (personAge < 10):
    //           mtext = 'Pradinės klasės mokinys'
    //           break;
    //       case (personAge < 11):
    //           mtext = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.'
    //           break;
    //       case (personAge < 14):
    //           mtext = 'Pagrindinės klasės mokinys'
    //           break;
    //       case (personAge < 15):
    //           mtext = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.'
    //           break;
    //       case (personAge < 18):
    //           mtext = 'Gimnazistas'
    //           break;
    //       case (personAge < 19):
    //           mtext = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.'
    //           break;
    //       case (personAge < 120):
    //           mtext = 'Mokyklą baigė'
    //           break;
    //       case (personAge >= 120):
    //           mtext = 'Per senas mokyklai'
    //           break;
    //       default:
    //           mtext = 'Klaida'
    //           break;
    //   }
    //   return mtext
    // }
    // console.log(studentAge(10))


    // //----TRAFFIC LIGHT----
    // function sviesoforas(light){
    // light = light.toLowerCase();
    // //convert to lower case

    // let text = ""
    // //empty variable for text output
    // switch (light) { //input to switch
    //     case 'green':// compare swithc to case
    //         text = 'Galima'//overwrite text variable with text
    //         break// if found breake 
    //     case 'yellow':// if not found case 2 start
    //         text = 'pasiruosk'
    //         break
    //     case 'red':
    //         text = 'STOP'
    //         break
    //     default:// report if incorect imput
    //         text = 'broken input'
    // }
    // console.log(text)// output of switch value with text 
    // let header=document.querySelector('h1')// asign <h1> to new variable header

    // console.dir(header) // check current output of header to make sure its <H1> in console
    // console.dir(header.textContent) // check header content (IT DOESNT MATTER JUST FOR FUN)
    // header.textContent=(text) // asign NEW value outputed by switch text back to header

    // header.textContent = text
    // header.style.textTransform = 'uppercase'
    // header.style.fontSize = '70px'
    // header.style.textAlign = 'center'
    // header.style.color = 'white'
    // header.style.padding = '30px'

    // if (light == "green"){
    //     header.style.backgroundColor = 'green'
    //     header.style.color = 'white';
    // } else if (light == "yellow"){
    //     header.style.backgroundColor = 'yellow'
    //     header.style.color = 'black'
    // } else if (light == "red"){
    //     header.style.backgroundColor = 'red'
    //     header.style.color = 'yellow'
    // } else {
    //     header.style.backgroundColor = 'white'
    //     header.style.color = 'white'
    // }
    // return text
    // }
    // console.log(sviesoforas('green'))
    // input 'green' 'yellow' 'red'


    // //----WEEKDAY----
    // function weekDay(weeksDay){
    // let answer
    //   switch (weeksDay) {
    //     case "Pirmadienis":
    //     case "Antradienis":
    //         answer = "Tai yra darbo diena"
    //       break;
    //     case "Treciadienis":
    //         answer = "Tai yra darbo diena, bei savaites vidurys"
    //       break;
    //     case "Ketvirtadienis":
    //     case "Penktadienis":
    //         answer = 'Tai yra darbo diena'
    //       break;
    //     case "Sestadienis":
    //     case "Sekmadienis":
    //         answer = 'Tai yra savaitgalio diena'
    //       break;
    //       default:
    //         answer = ('Ivedei kazkokius vejus')
    //   }
    //   return answer
    // }
    // console.log(weekDay("Treciadienis"))



    // //----IF ELSE EXAMPLES---- 



    // //---- PASSWORD----   
    // function greet(personName, time, isBirthday = false) {
    //     let greeting
    //     let nameText
    //     let birthdayText
    //     let greetingElement = document.querySelector('h2');
    //     let isLoggedIn = !!personName // expected true if name exist
    
    //     if (time >= 5 && time <= 12) {
    //         greeting = 'Good Morning'
    //     } else if (time >= 13 && time <= 18) {
    //         greeting = 'Good Afternoon';
    //     } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
    //         greeting = 'Good Evening';
    //     } else {
    //         greeting = 'Hello';
    //     }
    //     if (isLoggedIn && personName !== '') {
    //         nameText = ', ' + personName;
    //     } else {nameText = ''}
    //     if (isBirthday && isLoggedIn) {
    //         birthdayText = ' and have a great birthday!';
    //     } else {birthdayText = '.'}
    //     greetingElement.textContent = greeting + nameText + birthdayText;
    // }
    // greet('ROD', 8)
    // // name time isBirthday(can be entered or not because it has default false) 

    

    // // ----GAME ----
    // function gameStage1(playerAnswer1, playerAnswer2){
    //   let correctAnswer1 = 4
    //   let correctAnswer2 = 'kedes'
    //   let question1 =  'Kiek bus 2+2=?'
    //   let question2 = 'Ant ko sedi dunduk?'
    //   let text =''
    //   console.log(playerAnswer1,playerAnswer2)
    //     if (playerAnswer1==correctAnswer1 && playerAnswer2!==correctAnswer2){
    //         text ='Neatspejai klausimo:'+ question2+'- Patenki i kita rounda.'
    //     } else if (playerAnswer1!==correctAnswer1 && playerAnswer2==correctAnswer2){
    //         text = 'Neatspejai klausimo:'+ question1 +'- Patenki i kita rounda.'
    //     } else if (playerAnswer1==correctAnswer1 && playerAnswer2==correctAnswer2){
    //         text = 'atspejai abu MLDC'
    //     } else {
    //         text = 'tu dunduks'
    //     }
    //     return text
    // }
    // console.log(gameStage1( 4, "kedes"))
    // ivesk atsakymus i abu klausimus forma: x,"x"
    /// NEBAIGTA
    // function gameStage2(playerAnswer1,playerAnswer2){

    //   if (playerAnswer1==correctAnswer3 && playerAnswer2!==correctAnswer4){
    //       text2 = 'Neatspejai klausimo:'+ question4
    //   } else if (playerAnswer1!==correctAnswer3 && playerAnswer2==correctAnswer4){
    //       text2 = 'Neatspejai klausimo:'+ question3
    //   } else if (playerAnswer1==correctAnswer3 && playerAnswer2==correctAnswer4){
    //       text2 = 'atspejai abu MLDC','Patenki i kita rounda'
    //   } else {
    //       text2 = 'tu dunduks'
    //   }
    // }
    // console.log(gameStage2(playerAnswer1,playerAnswer2))



    // // ---- Game stage3 ----
    // function gameStage3 (playerAnswer5,playerAnswer6,playerAnswer7){
    // let question5 = "Kiek bus 3x3=?"
    // let question6 = "kokios spalvos saule?"
    // let question7 = "Kas sako miau?"

    // let correctAnswer5 = 1
    // let correctAnswer6 = 1
    // let correctAnswer7 = 1
    // let text =""
    // if (playerAnswer5==correctAnswer5 && playerAnswer6==correctAnswer6 && playerAnswer7==correctAnswer7){
    //   console.log('ATSPEJAI VISUS!!!')

    // } else if (playerAnswer5!=correctAnswer5 && playerAnswer6!=correctAnswer6 ){
    //   text3 = 'neteisingas 1 2'
    // } else if (playerAnswer6!=correctAnswer6 && playerAnswer7!=correctAnswer7){
    //   text3 = 'neteisingas 2 3'
    // } else if (playerAnswer5!=correctAnswer5 && playerAnswer7!=correctAnswer7){
    //   text3 = 'neteisingas 1 3'

    // } else if (playerAnswer5!=correctAnswer5 ){
    //   text3 = 'neteisingas 1 '
    // } else if (playerAnswer6!=correctAnswer6 ){
    //   text3 = 'neteisingas 2'
    // } else if (playerAnswer7!=correctAnswer7){
    //   text3 = 'neteisingas 3'

    // } else {
    //   text3 = 'TU DURNS - nieko tu neatspejai'
    // }
    // return text3
    // console.log(text3)
    // }
    // console.log(gameStage3(1,1,1))


}

export default switchExamplesComp