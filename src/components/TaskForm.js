import React from 'react';

const TaskForm = () => {
  return(
    <div className='task-form'>
        <h2 className='task-form-title'>Task</h2>
        <div className='div-input-title-form'>
            <input type="text" placeholder='Write a title' name="title" className='input-title-form'/>
        </div>
        <div className='div-textarea-form'>
            <textarea className='textarea-form' rows="2" name="description" placeholder="Write a description"></textarea>
        </div>
        <div className='div-btn-form'>
            <button className='btn-form'>Click</button>
        </div>
    </div>
  )
}

export default TaskForm;