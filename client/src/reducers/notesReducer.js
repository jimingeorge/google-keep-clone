

const notesReducer = (state=[],action)=>{
    switch(action.type){
        case('SET_NOTES'):{
            return [...action.payload]
        }
        case('POST_NOTES'):{
            return [{...action.payload},...state]
        }
        case('DELETE_NOTES'):{
            const filtered = state.filter(ele=>ele._id!==action.payload._id)
            return [...filtered]
        }
        default:{
            return [...state]
        }
    }
}

export default notesReducer