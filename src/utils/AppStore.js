import {configureStore} from '@reduxjs/toolkit';
import listReducer from './ListSlice';

const appStore = configureStore({
    reducer : {
        list : listReducer,
    }
});

export default appStore;