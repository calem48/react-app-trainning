import React, { useReducer, useState } from "react";
import Modal from "./modal";
import reducer from "./reducer"


let initState = {
  people: [],
  show: false,
  msg: ""
}

function App() {

  const [state, Dispatch] = useReducer(reducer, initState)

  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [show, setShow] = useState(false);

  let handleSubmit = () => {
    if (name) {
      let newPeolpe = { id: new Date().getTime().toString(), name }
      Dispatch({ type: "ADD_ITEM", paylaod: newPeolpe })
      setName("")
    } else {
      Dispatch({ type: "NO_ITEM" })

    }
  }

  let closeModal = () => {
    Dispatch({ type: "COLSE_MODAL" })
  }


  return (
    <>
      {state.show && <Modal msg={state.msg} close={closeModal} />}

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={() => Dispatch({ type: "REMOVE_ITEM", paylaod: person.id })}>
              remove
            </button>
          </div>
        );
      })}

    </>
  )
}



export default App;


