import createElement from '../tools/elementCreator.js'

const logic = () => {
    let a={z:'zz',b:'bb'}
    let v=['zz','bb']
    const logicDiv = createElement('div',['logic', 'component'] )

    console.log(typeof 5)


    console.log(a)
    console.log(...(Object.values(a)))


}

export default logic


