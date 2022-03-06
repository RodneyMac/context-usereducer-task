import { useReducer } from "react";
import { createContext } from "react";
import {v4} from "uuid";


const initialState = {
    tasks: [
        {
            id: "1",
            title: "Title One",
            description: "Some Description",
            done: false,
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(initialState);

    const addTask = (task) => {
        dispatch({type: "ADD_TASK", payload: {...task, id: v4(), done: false}});
    }

    const deleteTask = (id) => {
        dispatch({type: "DELETE_TASK", payload: id});
    }
    
    return(
        <GlobalContext.Provider value={{...state, addTask, deleteTask}}>
            {children}
        </GlobalContext.Provider>
    )
}