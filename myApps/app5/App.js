import React, { useState } from "react";
import { data } from "./data"
import Menu from "./menu"
import Category from "./Category"

let cat = ["All", ...new Set(data.map(item => item.category))]

function App() {
  const [category, setCategory] = useState(cat);
  const [menu, setMenu] = useState(data);



  let fillterCategory = (c) => {
    let newData = data.filter(item => {
      return c === "All" ? data : item.category == c
    })
    setMenu(newData)
  }


  return (

    <div className="container">
      <h1>Our menu</h1>
      <Category cate={category} filter={fillterCategory} />

      <Menu menu={menu} />
    </div>


  )
}



export default App;
