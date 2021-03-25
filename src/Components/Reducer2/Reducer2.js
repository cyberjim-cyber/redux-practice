import React, { useReducer, useRef } from 'react';
import { initialState, patientReduce } from '../PatientReducer/PatientReducer';



const Reducer2 = () => {
    const nameref=useRef()

    const [state,dispatch] =useReducer(patientReduce,initialState)

const handlesubmit=(e)=>{
    dispatch({type: 'ADD_PATIENT',
    name:nameref.current.value,
    id:state.patient.length})

    console.log(nameref.current.value)

    nameref.current.value=' '

    e.preventDefault()
}

    return (
        <div>
            <h1>Manage patient:{state.patient.length}</h1>
            <form onSubmit={handlesubmit}>
                <input ref={nameref} ></input>
             {
                 state.patient.map((pt)=>
                 <li onClick={()=>dispatch({type:'REMOVE_PATIENT',id:pt.id})} key={pt.id}>
                     {pt.name}</li>)
             }

            </form>
        </div>
    );
};

export default Reducer2;