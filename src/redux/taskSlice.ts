import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task{
    id: string;
    task: string;
}

interface TaskState{
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: []
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask(state, action: PayloadAction<{id: string, task: string}>){
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    }
});

export const {addTask, removeTask} = taskSlice.actions;

export default taskSlice.reducer;