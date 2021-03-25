import React, { useReducer } from 'react';
import {  detailreduce, initialState } from './ShowDetail';

const PracticeReduce = () => {

    const [state,dispatch] =useReducer(detailreduce,initialState)
    return (
        <div>
            <h2>practice reducer</h2>
            {
                state.map(n=><li    onClick={()=>dispatch({type:'Show_Name',age:n.age})}  key={n.id}>{n.nam}</li>)
            }
        </div>
    );
};

export default PracticeReduce;