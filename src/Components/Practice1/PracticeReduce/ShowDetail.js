 export const initialState=[
  {  nam:'tanjim',age:20,id:1},
  {  nam:'tanjim1',age:21,id:2},
  {  nam:'tanjim2',age:22,id:3},
]


export  const detailreduce=(state,action) => {
    switch(action.type){
        case 'Show_Name':
            console.log(state)

        const filtername=state.filter(nm=>nm.age == action.age)
        console.log(filtername)
            return (filtername)
            default:
               return state
            
    }
}