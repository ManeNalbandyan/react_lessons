import React from 'react';
import './AddItem.css';

const AddItem = () =>{
    return (
       <div>
           <input type="text"  className="textarea"/>
           <button className ="btn btn-danger"><h5>+</h5></button>
       </div>
    );
};

export default AddItem