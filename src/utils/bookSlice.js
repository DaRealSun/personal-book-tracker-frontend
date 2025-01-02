import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        list: []
    },
    reducers: {
        setBooks: (state, action) => {
            state.list = action.payload;
        },
        addBook: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const { setBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
