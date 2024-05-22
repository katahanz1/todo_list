import React from 'react';
import '../styles/task.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTask } from '../redux/taskSlice';

const Task: React.FC = () => {

    const tasks = useSelector((state: RootState) => state.task.tasks)
    const dispatch = useDispatch();

    const handleDelete = (id: string) =>{
        dispatch(removeTask(id))
    }

    return (
        <>
            {
                tasks.map((task) => (
                    <div key={task.id} className="task-container">
                        <input type="checkbox" aria-label="Mark task as complete" />
                        <p className='task-text'>{task.task}</p>
                        <button className='task-button' aria-label="Delete task" onClick={() => handleDelete(task.id)}>eliminar</button>
                    </div>
                ))
            }
        </>
    );
}


export default Task;
