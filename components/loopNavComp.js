import myElementCreator from "../tools/myElementCreator.js";

import loopComp from '../components/loopComp.js'
import arrayCheatsheetComp from '../components/arrayCheatsheetComp.js'
import array3DComp from '../components/array3DComp.js'

const loopNav = () =>{

  let ul = myElementCreator('ul', 'loop-nav', 'body')

  let liCheat = myElementCreator('li', ['cheetsheet', 'subButton'], 'loop-nav')
  let liFor = myElementCreator('li', ['for', 'subButton'], 'loop-nav')
  let liArray3D = myElementCreator('li', ['array3D', 'subButton'], 'loop-nav')
  liCheat.textContent = 'CHEATSHEET'
  liFor.textContent = 'FOR'
  liArray3D.textContent = 'ARRAY 3D'

  let renderedContent = myElementCreator('div','renderedContent','body')

  ul.addEventListener('click',(e)=>{
    e.preventDefault()
    renderedContent.textContent=``
    
    console.dir(e.target.textContent)
    if(e.target.textContent==="CHEATSHEET"){
      arrayCheatsheetComp()
    } else if(e.target.textContent === "FOR"){
      loopComp()
    } else if(e.target.textContent === "ARRAY 3D"){
      array3DComp()
    }
  })

}
export default loopNav