import React, { useState, useEffect } from "react";
import List from "./list";
import Alert from "./alert";



function App() {
  const [data, setdata] = useState();
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  let handelSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      showAlert(true, 'danger', 'please enter the value')
    } else if (isEdit && value) {

      let n = list.map(item => {
        if (item.id === editID) {
          return { ...item, title: value }
        }
        return item
      })

      setList(n)
    } else {
      showAlert(true, "success", "item added successfuly")
      let newitem = { id: new Date().getTime().toString(), title: value }
      setList(() => {
        return [...list, newitem]
      })
      setValue("")

    }

  }



  let showAlert = (show, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  let removeItem = (id) => {
    let nesList = list.filter(it => it.id != id)
    setList(nesList)
  }

  let updateItem = (id) => {
    let newItem = list.find(item => {
      return item.id === id
    })
    setIsEdit(true)

    setValue(newItem.title)

    setEditID(id)


  }


  return (

    <section className="section-center">
      {alert && <Alert {...alert} />}

      <form className="grocery-form" onSubmit={handelSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List items={list} remove={removeItem} update={updateItem} />
        <button className="clear-btn" onClick={() => setList([])}>clear items</button>
      </div>

    </section >

  )
}



export default App;
