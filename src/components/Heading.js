import React from 'react';
import {Link} from "react-router-dom";

const Heading = () => {
  return(
    <div className='heading'>
        <Link to="/" className='div-text-h'>
            <h4 className='text-heading'>Task App</h4>
        </Link>
        <div className='div-btn-add-h'>
            <Link to="/add">
                <button className='btn-add-h'>Add Task</button>  
            </Link>
        </div>
    </div>
  )
}

export default Heading;