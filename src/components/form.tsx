import React from 'react';
import '../styles/form.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const Form: React.FC = () => {

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const {elements} = event.currentTarget;
        const input = elements.namedItem('item');
        const isInput = input instanceof HTMLInputElement;
        if(!isInput || input == null) return

        const newItem = {
            id: crypto.randomUUID(),
            task: input.value
        };
        input.value = "";
        dispatch(addTask(newItem));
    }       

    

    return (
        <form className='form-task' onSubmit={handleSubmit}>
            <input name="item" type="text" placeholder="Do the dishes" className='form-input' aria-label="Task description" required/>
            <button className='form-submit' aria-label="Submit task">Submit</button>
        </form>
    );
}

export default Form;
