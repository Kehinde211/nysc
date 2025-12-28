import type { Action, ThunkAction  } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import chatsReducer from "@/features/chats/chatsSlice";
// import reviewsReducer from "@/features/reviews/reviewsSlice";


export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        // reviews: reviewsReducer,
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>

// Inferring the 'AppDispatch' type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
ThunkReturnType,
RootState,
unknown,
Action
>