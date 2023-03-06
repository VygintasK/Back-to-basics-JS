import createElement from '../tools/elementCreator.js'

const logic = () => {
    let a={z:'zz',b:'bb'}
    let v=['zz','bb']
    let logicDiv = createElement('div',['logic', 'component'] )
    document.body.append(logicDiv)
    console.log(typeof 5)


    console.log(a)
    console.log(...(Object.values(a)))


}

export default logic


