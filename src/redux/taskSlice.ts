import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
    id: string;
    task: string;
}

interface TaskState {
    tasks: Task[];
}

// Función para cargar las tareas desde el localStorage
const loadTasksFromLocalStorage = (): Task[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Función para guardar las tareas en el localStorage
const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const initialState: TaskState = {
    tasks: loadTasksFromLocalStorage(),
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<{ id: string, task: string }>) {
            const newTask = action.payload;
            state.tasks.push(newTask);
            saveTasksToLocalStorage(state.tasks); // Guardar en localStorage
        },
        taskDone(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            saveTasksToLocalStorage(state.tasks); // Guardar en localStorage
        },
    }
});

export const { addTask, taskDone } = taskSlice.actions;

export default taskSlice.reducer;
