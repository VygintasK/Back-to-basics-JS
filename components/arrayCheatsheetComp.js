import myElementCreator from "../tools/myElementCreator.js";

let arrayCheatsheetComp = () => {
  console.clear()
  let cheatsheetDiv = myElementCreator('div', ['cheatsheet','cycleComp', 'component'],'renderedContent')
  cheatsheetDiv.innerHTML = `
    <img src="./img/arrayCheatsheet/1.png" alt="cheat sheet 1"></img>
    <img src="./img/arrayCheatsheet/2.png" alt="cheat sheet 2"></img>
  `




}
export default arrayCheatsheetComp