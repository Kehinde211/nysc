"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./tasksTypes";

interface TasksState {
    entities: Task[];
    status: "idle" | "loading" | "error"
}

const initialState: TasksState = {
    entities: [],
    status: "idle",
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.entities = action.payload
        },
        updateTaskStatus: (state, 
            action: PayloadAction<{id: string; status: Task["status"]} >
        ) => {
            const task = state.entities.find(t => t.id === action.payload.id)
            if (task) task.status = action.payload.status
        }
    }
})

export const { setTasks, updateTaskStatus} = tasksSlice.actions;
export default tasksSlice.reducer;