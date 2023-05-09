import myElementCreator from "../tools/myElementCreator.js";

const array3DComp = () => {
  console.clear()

  const wrap = myElementCreator('div','wrap','renderedContent')
  wrap.innerHTML = `
    <h1>3D Array</h1>
    <h3>Excel file with 2 sheets</h3>
    <p>Lets say there are formulas and you need to evaluate "1,2,3,4,7" and "a,b,c,d,g" and replace them with answer.</p>
    <img src='./img/array3D/excelTablet.png' alt='tablet'></img>
    <p>take parts of tablet and turn it into more managable 1D array of objects (if is needed here for conditions)</p>
    <img src='./img/array3D/3DTo1Dobj.png' alt='code 3d to 1d array'></img>
    <p>evaluate and have easy to read 1d array</p>
    <img src='./img/array3D/array1d.png' alt='1D array of OBJ example'></img>
    <p>create new array based on old array. Filling Missing cells from old 3D array and maching cells from 1D OBJ EVALUATED array.</p>
    <img src='./img/array3D/fillArrayA.png' alt='fill arr example A'></img>
    <p>or you can use functions for easier debugging</p>
    <img src='./img/array3D/fillArrayB.png' alt='fill arr example B'></img>
  `
  
  let array3D = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ]
  ]
  console.table(array3D[0])
  console.table(array3D[1])
  let replacingData = [
    [
      [
        'cat',
        'horse',
        'bird'
      ],
      [
        'dog'
      ],
      [
        'tiger'
      ]
    ],
    [
      [
        'snake',
        'bug',
        'lizzard'
      ],
      [
        'frog'
      ],
      [
        'log'
      ]

    ]
  ]

  // 1 -------CONVERT MULTIDIMENTION ARR ONE DIMENSION OBJECTS ARR to be more managable
  let oneArrOfData = []
  replacingData.forEach((sheet, sIndex) => {
    sheet.forEach((row, rIndex) => {
      row.forEach((col, cIndex) => {
        let obj = {
          sheet: sIndex,
          row: rIndex,
          col: cIndex,
          value: col
        }
        oneArrOfData.push(obj)
      })
    })
  })


  // 2 -------ONE DIMENSION ARR
  let arrOfObjs = [
    { sheet: 0, row: 0, col: 0, value: 'cat' },
    { sheet: 0, row: 0, col: 1, value: 'horse' },
    { sheet: 0, row: 0, col: 2, value: 'bird' },
    { sheet: 0, row: 1, col: 0, value: 'dog' },
    { sheet: 0, row: 2, col: 0, value: 'tiger' },
    { sheet: 1, row: 0, col: 0, value: 'snake' },
    { sheet: 1, row: 0, col: 1, value: 'bug' },
    { sheet: 1, row: 0, col: 2, value: 'lizzard' },
    { sheet: 1, row: 2, col: 0, value: 'frog' },
    { sheet: 1, row: 1, col: 0, value: 'log' }
  ]





  // 3.1---------MY VERSION

  let newArr=[]
  array3D.forEach((sheet,iSheet)=>{
    let newSheetArr =[]
    newArr.push(newSheetArr)

    sheet.forEach((row,iRow)=>{
      let newRowArr = []
      newSheetArr.push(newRowArr)

      row.forEach((col,iCol)=>{
        const match = arrOfObjs.find(value => value.sheet===iSheet && value.row===iRow && value.col===iCol )
        match ? newRowArr.push(match.value) : newRowArr.push(col)
      })
    })
  })
  console.table(newArr[0])
  console.table(newArr[1])



  // // 3.2----------GPT ROKO VERSION I REMADE ENDING
  // const handleFile = (file) => {
  //   return file.map((item, index) => handleSheet(item, index));
  // };

  // const handleSheet = (sheet, sheetIndex) => {
  //   return sheet.map((item, index) => handleRow(item, index, sheetIndex));
  // };

  // const handleRow = (row, rowIndex, sheetIndex) => {
  //   return row.map((col, colIndex) => handleColumn(col, colIndex, rowIndex, sheetIndex))
  // };

  // const handleColumn = (col, colIndex, rowIndex, sheetIndex) => {
  //   let match = arrOfObjs.find(element => element.sheet === sheetIndex && element.row === rowIndex && element.col === colIndex)
  //   return match ? match.value : col
  // }
  // const result = handleFile(array3D);
  // console.table(result[0]);
  // console.table(result[1]);





  // // 3.3------------ MY VERSION people say you should not replace itterating array parts So probably wrong example
  // arrOfObjs.forEach(elm=>{
  //   array3D.map((sheet,index3D) =>{
  //     if(elm.sheet === index3D){
  //       sheet.map((row,index2D)=>{
  //         if(elm.row === index2D){
  //           row.map((col,index1D)=>{
  //             if(index1D===elm.col){
  //               col=elm.value
  //               //arba
  //               row[index1D] = elm.value
  //               //arba
  //               // row.splice(index1D,1,elm.value)
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // })
  // console.log(resultArr)
  // console.table(array3D[0])
  // console.table(array3D[1])
 
}
export default array3DComp