import React, { useState, useEffect } from "react";





function App() {
  const [loading, setloading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);
  let getInfo = async () => {
    let res = await fetch("https://course-api.com/react-tabs-project")
    let data = await res.json()
    setJob(data)
    setloading(false)
    console.log(data);
  }

  useEffect(() => {
    getInfo()
  }, []);

  if (loading) {
    return <h1>loading ...</h1>
  }


  const { id, title, company, dates, duties } = job[value]

  return (

    <div className="container">

      <div className="title">
        <h1>Experience</h1>
      </div>

      <div className="content">

        <div className="btns">
          {
            job.map((item, index) => {
              return <button className={`${index === value && "active"}`} onClick={() => setValue(index)} key={item.id}>{item.company}</button>
            })
          }
        </div>

        <div className="info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {
            duties.map((item, index) => {
              return (
                <div key={index} className="desc">
                  <i className="fa-solid fa-angles-right"></i>
                  <p>{item}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>


  )
}



export default App;
