import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const thunkFetchRobots = createAsyncThunk(
    'robot/fetch',
    async (params, thunkAPI) => {
        return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    }
)


const robotSlice = createSlice({
    name: 'robot',
    initialState: {
        isPending: false,
        robots: [],
        error: '',
    },
    reducers: {},
    extraReducers: {
        [thunkFetchRobots.pending]: (state, action) => {
            state.isPending = true
        },
        [thunkFetchRobots.fulfilled]: (state, action) => {
            state.isPending = false;
            state.robots = action.payload;
        },
        [thunkFetchRobots.rejected]: (state, action) => {
            state.isPending = false;
            state.error = 'Fail to  load!';
        }
    }
})


const { actions, reducer } = robotSlice;

export const {} = actions;
export default reducer;
