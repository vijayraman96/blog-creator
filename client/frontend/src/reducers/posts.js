import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


const initialState = {
    value: ['vijay', 'harish'],
    isLoading: false,
    hasError: false
}
export const fetchData = createAsyncThunk('createPost/user',
 async() => {
    try {
        const response = await axios.get('http://localhost:5001/api/v1/posts/').then(res => {
            // console.log(res.data);
            return res.data;
        })
        return response
    } catch (err) {
        console.log(err);
    }
 }
)
export const createPost = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        // createList : (state, action) => {
        //   state.value = [...state.value, ...action.payload]
        //     console.log(action.payload, state.value);
        // }
    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.hasError = true
        })
    }
});
// export const selectPost = state => state.value;
// export const {createList} = createPost.actions;
export default createPost.reducer;

// export const initialData  = initialState.value