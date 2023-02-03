import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice'
import conversationSlice from './conversationSlice'
import feedSlice from './feedSlice'
import messageSlice from './messageSlice'
import storySlice from './storySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversation: conversationSlice,
    feed: feedSlice,
    message: messageSlice,
    story: storySlice,
  },
})