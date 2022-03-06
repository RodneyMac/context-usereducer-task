import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {Link} from "react-router-dom";

const TaskList = () => {

const {tasks, deleteTask} = useContext(GlobalContext);

  return(
    <div className='tasklist-container'>
        <div className='task-list'>
            {tasks.map(task => (
                <div className='' key={task.id}>
                    <div>
                        <h1>{task.title}</h1>
                        <h6>{task.id}</h6>
                        <p>{task.description}</p>
                    </div>
                    <div className='div-btn-tasklist'>
                        <Link to={`/edit/${task.id}`} className='btn-edit'>Edit</Link>
                        <button className='btn-delete'>Delete</button>
                    </div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default TaskList;