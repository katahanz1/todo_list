import React from 'react';
import '../styles/task.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { taskDone } from '../redux/taskSlice';

const Task: React.FC = () => {

    const tasks = useSelector((state: RootState) => state.task.tasks)
    const dispatch = useDispatch();

    const handleDone = (id: string) =>{
        dispatch(taskDone(id))
    }

    return (
        <>
            {
                tasks.map((task) => (
                    <div key={task.id} className="task-container">
                        <p className='task-text'>{task.task}</p>
                        <button className='task-button' aria-label="Delete task" onClick={() => handleDone(task.id)}>Done</button>
                    </div>
                ))
            }
        </>
    );
}


export default Task;
