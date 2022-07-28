import { configureStore } from '@reduxjs/toolkit';
import createPost from '../reducers/posts'

export const store = configureStore({
    reducer: {
        createPost
    },
  })