export const initialState={
    patient:[]

}

 export const patientReduce=(state,action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatients={
                id: action.id,
                name: action.name
            }
            const all=[...state.patient,newPatients]
            return {patient:all}

            case 'REMOVE_PATIENT':

            
            const removedPatients=state.patient.filter(pt=>pt.id !==action.id)


                return {patient:removedPatients}


            default:
                return state
    }
}