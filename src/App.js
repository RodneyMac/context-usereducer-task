import './App.css';
import {Routes, Route} from "react-router-dom";
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <Heading/>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/add" element={<TaskForm/>}/>
          <Route path="/edit/:id" element={<TaskForm/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
