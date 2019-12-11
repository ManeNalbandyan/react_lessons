import React from 'react';

import Filter from '../Filter';
import List from '../List'
import AddItem from '../AddItem'
import './App.css';

const data = [
    {
        id: 1,
        title: 'Have breakfast',
        isDone: true
    },
    {
        id: 2,
        title: 'Go shopping',
        isDone: false
    },
    {
        id: 3,
        title: 'make a dinner',
        isDone: true
    },
    {
        id: 4,
        title: 'buy food for dog',
        isDone: false
    },
    {
        id: 5,
        title: 'go to cinema',
        isDone: true
    }
];

const App = () =>{
    return (
       <div className="main">
            <h1 className="data">Thursday, 13 Dec</h1>
            <Filter />
            <div className="row move">
            <List  todoData= {data}/>
            </div>
            <AddItem />
       </div>
    );
};

export default App