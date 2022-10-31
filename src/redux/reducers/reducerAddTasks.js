import { ADD_TASKS } from "../constants";
import { v4 as uuiv4 } from 'uuid';

const initialState = {
    tasks : []
}

const helperOfAddTasks = (action) => {                  //helper addin the id to the tasks
    return {
        id: uuiv4(),
        theTodo: action.payload.theTodo
    }
}

//----------------declaration du reducer


const reducerAddTasks = (state = initialState.tasks , action) => {

   // if(localStorage.getItem('tasksData'))
       // state = JSON.parse(localStorage.getItem('tasksData'))
        
    switch (action.type) {
        case ADD_TASKS:
            state = [...state , helperOfAddTasks(action)]
            //localStorage.setItem('tasksData',JSON.stringify(state))
            return state
    
        default: return state
            
    }
}

export default reducerAddTasks
