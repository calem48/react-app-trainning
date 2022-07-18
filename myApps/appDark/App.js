import React, { useEffect, useState } from 'react';
import Article from './article';
import data from './data'

let getThemevalue = () => {
  return localStorage.getItem("theme") || "light-theme"
}

function App() {
  const [toggle, setToggle] = useState(getThemevalue());

  let handleToogle = () => {
    if (toggle === "light-theme")
      setToggle("dark-theme")
    else
      setToggle("light-theme")
  }

  useEffect(() => {
    document.body.className = toggle
    localStorage.setItem("theme", toggle)
  }, [toggle]);


  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button onClick={handleToogle} className="btn">toggle</button>
        </div>
      </nav>

      <section className='articles'>
        {
          data.map(item => {
            return <Article key={item.id} {...item} />
          })
        }
      </section>
    </main>
  );
};


export default App;