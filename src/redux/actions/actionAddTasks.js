import { ADD_TASKS } from "../constants";


export const addTasks = (data) => {

    
    return {
        type: ADD_TASKS,
        payload: {data}    /* objet de la data a recuperer (le todo saisi) */
    }
}