import React from 'react';
import './ListItem.css';

const ListItem = ({list}) =>{

  const color = list.isDone ? 'green' : 'red'
  const styleData = {color};
    return (
          <li class="lists">   
            <button className ="btn btn-danger">  <i class="fa fa-check" /></button>
            <button  className ="btn btn-danger"><i class="fa fa-remove"></i></button>
            <span style={styleData} className="titles">{list.title}</span>
         </li>
    );
};

export default ListItem