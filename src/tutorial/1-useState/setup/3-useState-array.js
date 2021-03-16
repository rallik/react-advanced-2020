import React, {useState} from 'react';
import { data } from '../../../data';



const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleClick = () => {
    setPeople([])
  }

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          console.log(person)
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>del</button>
            </div>
          );
        })
      }
      <button className='btn' onClick={handleClick}>Clear Items</button>
    </React.Fragment>
  );
};

export default UseStateArray;
