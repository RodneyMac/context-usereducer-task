import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const TaskForm = () => {

const {addTask, tasks, updateTask} = useContext(GlobalContext);
const navigate = useNavigate();
const params = useParams();

const [task, setTask] = useState({
    id: "",
    title: "",
    description: ""
});

const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id) {
        updateTask(task);
    } else {
        addTask(task);
    }
    navigate("/");
}

useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id);
    if(taskFound) {
        setTask(taskFound);
    }
}, [params.id, tasks]);

  return(
    <div className='task-form'>
        <form className='' onSubmit={handleSubmit}>
            <h4 className='task-form-title'>{task.id ? "Editing a Task" : "Creating a Task"}</h4>
            <div className='div-input-title-form'>
                <input type="text" placeholder='Write a title' name="title" className='input-title-form' onChange={handleChange} value={task.title}/>
            </div>
            <div className='div-textarea-form'>
                <textarea className='textarea-form' rows="2" name="description" placeholder="Write a description" onChange={handleChange} value={task.description}></textarea>
            </div>
            <div className='div-btn-form'>
                <button className='btn-form'>{task.id ? "Edit" : "Create"} Task</button>
            </div>    
        </form>
    </div>
  )
}

export default TaskForm;