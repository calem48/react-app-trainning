import React, { useState } from "react";
import List from "./list";
import data from "./data"


function App() {

  const [users, setUsers] = useState(data);

  return (
    <div className="wrrap">
      <div className="container">
        <div className="head">{users.length} birthdays todays</div>
        <div className="content">
          <List data={users} />
        </div>
        <button onClick={() => setUsers([])}>clear all</button>
      </div>
    </div>
  )
}



export default App;
