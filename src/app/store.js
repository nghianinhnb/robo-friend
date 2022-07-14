import robotReducer from '../components/robotSlice';
import searchReducer from '../components/searchSlice';

import { configureStore } from '@reduxjs/toolkit';


const rootReducer = {
    search: searchReducer,
    robot: robotReducer
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;
