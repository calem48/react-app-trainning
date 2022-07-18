import React, { useState, useEffect } from "react";
import Questons from "./questons"
import data from "./data"

function App() {

  let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  let arr2 = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]

  function mt(arr1, arr2) {

    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
      newArray[i] = []
      for (let j = 0; j < arr2.length; j++) {
        newArray.push(arr1[i][j] + arr2[i][j])
      }
    }
    return newArray

  }
  console.log(mt(arr1, arr2));

  return (
    <div className='container'>
      <h3> login</h3>
      <section className='info'>

        {
          data.map(item => {
            return <Questons key={item.id} {...item} />
          })
        }
      </section>
    </div>

  )
}



export default App;
