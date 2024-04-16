import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'list',
    initialState: {
        complete: [],
        incomplete: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.incomplete.push(action.payload);
        },
        markComplete: (state, action) => {
            const taskIndex = state.incomplete.findIndex(task => task.name === action.payload.name && task.time === action.payload.time);
            if (taskIndex !== -1) {
                const task = state.incomplete.splice(taskIndex, 1)[0];
                state.complete.push(task);
            }
        },
        removeTask: (state, action) => {
            // Check if the task is in the incomplete array
            let index = state.incomplete.findIndex(task => task.name === action.payload.name && task.time === action.payload.time);
            if (index !== -1) {
                state.incomplete.splice(index, 1);
                return;
            }
            // If not found in the incomplete array, check the complete array
            index = state.complete.findIndex(task => task.name === action.payload.name && task.time === action.payload.time);
            if (index !== -1) {
                state.complete.splice(index, 1);
            }
        }
    }
});

export const { addTask, markComplete, removeTask } = listSlice.actions;
export default listSlice.reducer;
