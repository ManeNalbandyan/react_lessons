import React from 'react';
import ListItem from '../ListItem';

import './List.css';

const List = ({todoData}) =>{
    
    const lists = todoData.map((l) => {
        return <ListItem key={l.id} list={l}/>
});
    return (
          <ul >
               {lists}
          </ul>
    );
};


export default List