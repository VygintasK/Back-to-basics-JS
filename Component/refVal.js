
const refVal = () => {

    //------------------value and reference--------------
    let value = 10
    let reference = [1, 2, 3]

    console.log("value:",value)
    console.log("reference:",reference)

    //------------------reference copy-------------------
    let referenceCopy = reference
    
    console.log(referenceCopy)              //copy of reference not a value
    console.log(reference)
    referenceCopy.push(9)                   //push changed value not a reference
    console.log(referenceCopy)
    console.log(reference)                  //thats why it changed for all references below push.

    referenceCopy = [...reference]          // creating NEW arr with new reference and spreading original values inside
    referenceCopy.push(100)                 // pushing value to new array reference
    console.log('copy: ',referenceCopy)     
    console.log('original: ',reference)     // both "referenceCopy" and "reference" refer to different value that is why they can be different





}
export default refVal