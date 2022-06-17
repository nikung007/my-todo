import React from "react";
import './Todo.css'


function TodoEditDelete(props){
    const {items,editItem,deleteItem,removeAll}=props
    return(
        <div>
            <div>
                {items.map((elem) => {
                    return (
                        <div key={elem.id} className="show-data">
                            <h3>{elem.name}</h3>
                            <div className="btn-show">
                                <button onClick={() => editItem(elem.id)}>Edit</button>
                                <button onClick={() => deleteItem(elem.id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="del">
                <button onClick={removeAll}>Delete-All</button>
            </div>
        </div>
       
    )
}

export default TodoEditDelete;