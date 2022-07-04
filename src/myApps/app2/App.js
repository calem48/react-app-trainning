import React, { useState, useEffect } from "react";
import Tours from "./tours";
import Loading from "./loading";


function App() {
  const url = 'https://course-api.com/react-tours-project'

  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);




  useEffect(() => {

    fetch(url).then(res => {
      return res.json()
    }).then(data => {
      setData(data)
      setIsLoading(false)
    })
  }, []);

  let remove = (id) => {
    let newData = data.filter(item => id != item.id)
    setData(newData)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (data.length === 0) {
    return <main>
      <section>
        <h2>there are no item</h2>
      </section>
    </main>
  }

  return (
    <main>
      <section>
        <Tours tour={data} remove={remove} />
      </section>
    </main>
  )
}



export default App;
