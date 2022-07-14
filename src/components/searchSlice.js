import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchField: ''
    },
    reducers: {
        updateSearchField: (state, action) => {
            return { ...state, searchField: action.payload }
        }
    }
})

const { actions, reducer } = searchSlice;

export const { updateSearchField } = actions;
export default reducer;
