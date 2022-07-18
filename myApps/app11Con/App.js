import React, { useState, useContext, createContext } from 'react';

let data = [
  {
    id: 1,
    name: "misso"
  },
  {
    id: 2,
    name: "kayou"
  },
  {
    id: 3,
    name: "ahmed"
  },
]
let myContext = React.createContext()

function App() {
  const [people, setPeople] = useState(data);



  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <myContext.Provider value={{ people, removePerson }} >
      <List />
    </myContext.Provider>
  );
};

const List = () => {
  const data = useContext(myContext);

  return (
    <>
      {
        data.people.map((person) => {
          return <SinglePerson key={person.id} {...person} />;
        })
      }
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const remove = useContext(myContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => remove.removePerson(id)} >remove</button>
    </div>
  );
};

export default App;