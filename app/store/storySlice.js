import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stories: [
        {
            id: 2,
            avatar: 'https://i.pravatar.cc/200?img=26',
            media: []
        },
        {
            id: 3,
            avatar: 'https://i.pravatar.cc/200?img=17',
            media: []
        },
        {
            id: 4,
            avatar: 'https://i.pravatar.cc/200?img=35',
            media: []
        }
    ]
}

export const storySlice = createSlice({
  name: 'story',
  initialState
})

export default storySlice.reducer