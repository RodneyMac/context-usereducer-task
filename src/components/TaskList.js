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
                <div className='task-list-map' key={task.id}>
                    <div className='list-map-content'>
                        <h2>{task.title}</h2>
                        <h6>{task.id}</h6>
                        <p>{task.description}</p>
                        <div className='div-btn-done'><button className='btn-done'>Done</button></div>
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