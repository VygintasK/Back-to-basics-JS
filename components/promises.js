const promisesFunc = () => {
    let p = new Promise((resolve, reject) => {
        let a=1+1
        if (a==2) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    })
    
    p.then((massage)=>{
        console.log('this massage from ".resolve": ' ,massage)
    }).catch((massage)=>{
        console.log('this massage from ".reject": ' ,massage)
    })
    
    // p.then(massage=>console.log(massage)).catch(massage=>console.log(massage))
}

export default promisesFunc