// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// export interface reviewSlice {
//     value: number,
//     status: "completed" | "unread" | "submitted" | "undone" | "unwritten"
// }

// export const initialState: reviewSlice = {
//     value: 0,
//     status: "unwritten",
// }

// export const reviewsSlice = createSlice({
//     name: "reviews",
//     initialState,
//     reducers: {
//         addReview: state => {
//             state.value += 1;
//         },
//         removeReview: state => {
//             state.value -= 1
//         },
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.value += payload.action
//         }
//     }
// })

// export const { addReview, removeReview, incrementByAmount } = reviewsSlice.actions;
// export default reviewsSlice.reducer;