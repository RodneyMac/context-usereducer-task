import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {Link} from "react-router-dom";

const TaskList = () => {
const {tasks, deleteTask, toggleTaskDone} = useContext(GlobalContext);

  return(
    <div className='tasklist-container'>
        <div className='task-list'>
            {tasks.map(task => (
                <div className='task-list-map' key={task.id}>
                    <div className='list-map-content'>
                        <h4>{task.title}</h4>
                        <h6>{task.id}</h6>
                        <p>{task.description}</p>
                        <button className='btn-done' onClick={() => toggleTaskDone(task.id)}>{task.done ? "Undone" : "Done"}</button>
                    </div>
                    <div>
                        <Link to={`/edit/${task.id}`} className='btn-edit'>Edit</Link>
                        <button className='btn-delete' onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default TaskList;