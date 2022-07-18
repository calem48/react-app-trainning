import React, { useState, useEffect } from "react";
import List from "./list";
import Alert from "./alert";



function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isID, setIsID] = useState(null);
  const [showAlert, setShowAlert] = useState({ show: false, type: "", msg: "" });

  let handelSubmit = (e) => {
    e.preventDefault()

    if (isUpdate && value) {
      alert(true, "success", "updated successfully")

      let listo = list.map(item => {
        if (item.id == isID) {
          return { ...item, title: value }
        }
        return item
      })
      setList(listo)
      setIsUpdate(false)
    } else if (value) {
      add()
      alert(true, "success", "added successfully")

    } else {
      alert(true, "danger", "please enter value")
    }


  }


  let add = () => {
    let item = { id: new Date().getTime().toString(), title: value }
    setList([...list, item])
    setValue("")
  }

  let delet = (id) => {
    setList(list.filter(item => item.id != id))
  }

  let update = (id) => {
    let item = list.find(item => item.id == id)
    setValue(item.title)
    setIsUpdate(true)
    setIsID(id)
  }

  let alert = (show, type = "", msg = "") => {
    setShowAlert({ show, type, msg })
  }


  return (

    <section className="section-center">
      {showAlert.show && <Alert {...showAlert} />}
      <form className="grocery-form" onSubmit={handelSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />

          <button type="submit" className="submit-btn">
            {isUpdate ? "Edit" : "Submit"}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List list={list} remove={delet} update={update} />
        <button className="clear-btn" >clear items</button>
      </div>

    </section >

  )
}



export default App;
