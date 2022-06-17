import React, { useState, useEffect, useRef } from "react";
import TodoEditDelete from "./TodoEditDelete";
import './Todo.css'


const getLocalItems = () =>{
  // let list = localStorage.getItem('lists');
  // if(list){
  //   return JSON.parse(localStorage.getItem('lists'));
  // } else {
  //   return [];
  // }
  let list = sessionStorage.getItem('lists');
  if(list){
    return JSON.parse(sessionStorage.getItem('lists'));
  } else {
    return [];
  }
}


function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null)

  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  })

  const addItems = () => {
    if (!inputData) {
      alert("Please Enter a Todo")
    }
    else if (inputData && !toggle) {
      setItems(
        items.map((elem) => {
          if (elem.id === edit) {
            return { ...elem, name: inputData }
          }
          return elem;
        })
      )
      setToggle(true)
      setInputData('')
      setEdit(null)
    }
    else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    });
    setToggle(false)
    setInputData(newEditItem.name)
    setEdit(id)
  }

  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems)
  }

  const removeAll = () => {
    setItems([])
  }


 
  useEffect(()=>{
    // localStorage.setItem('lists',JSON.stringify(items))
    sessionStorage.setItem('lists',JSON.stringify(items))
  },[items]);

  return (
    <div>
      <div className="main-div">
        <div className="hedding">
          <h1>To-Do-List-Day</h1>
        </div>

        <div className="input-data">
        <div style={{backgroundColor:'rgb(24, 22, 22)'}}>
            <input
              type="text"
              placeholder="Enter a Day Work"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              ref={inputRef}
            />
          </div>
          {
            <button title="Add Iteam" onClick={addItems}> {toggle ? "Add-This-Item" : "Update-This-Item "}  </button>
          }
        </div>
        <TodoEditDelete items={items} editItem={editItem} deleteItem={deleteItem} removeAll={removeAll}/>     
      </div>
    </div>
  );
}

export default Todo;
