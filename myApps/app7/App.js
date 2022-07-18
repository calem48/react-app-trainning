import React, { useState, useEffect } from "react";
import data from "./data"




function App() {
  const [value, setvalue] = useState(0);
  const [sentence, setSentence] = useState([]);

  let handelSubmit = (e) => {
    e.preventDefault()

    let amount = parseInt(value)
    if (value <= 0) {
      amount = 1
    }



    setSentence(data.slice(0, amount))

  }

  return (

    <div className="container">
      <form onSubmit={handelSubmit}>
        <input
          type="number"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
        // min={1}
        // max={data.length - 1}
        />
        <input type="submit" />
      </form>
      <div className="content">
        {

          sentence.map((item, i) => {
            return <p key={i}>{item}</p>
          })
        }

      </div>
    </div>

  )
}



export default App;
