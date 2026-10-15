import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {

            state.value += 1;
            //  console.log(state.value);

        },
        bulkChange: (state, action) => {
            const amount = Number(action.payload);
            if (Number.isFinite(amount)) state.value += amount;

        }
    }
})

export const { increment, bulkChange } = counterSlice.actions
export default counterSlice.reducer
