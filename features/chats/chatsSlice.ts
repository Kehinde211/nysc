// export type Status = "pending" | "due" | "read" | "urgent" | 'completed'

// export interface Chats {
//     status: Status;
//     dueDate: string;
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ChatsState {
    value: number,
    status: "read" | "loading" | "unread" 
}

const initialState: ChatsState = {
    value: 0,
    status: "unread"
}

export const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        increase: state => {
            state.value += 1
        },
        decrease: state => {
            state.value -= 1
        },
        reset: state => {
            state.value === 0;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const {increase, decrease, reset, incrementByAmount} = chatSlice.actions
export default chatSlice.reducer
