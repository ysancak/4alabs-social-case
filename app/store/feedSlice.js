import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    feeds: [
        {
            image: 'https://picsum.photos/id/26/600/600',
            user: {
                name: 'Tamara Carpenter',
                avatar: 'https://i.pravatar.cc/200?img=68'
            },
            time: 1675350784,
            stats: {
                like: 3654,
                comment: 648,
                save: 129
            }
        },
        {
            image: 'https://picsum.photos/id/114/600/600',
            user: {
                name: 'Dennis Reynolds',
                avatar: 'https://i.pravatar.cc/200?img=35'
            },
            time: 1675358553,
            stats: {
                like: 2487,
                comment: 325,
                save: 108
            }
        }
    ]
}

export const feedSlice = createSlice({
  name: 'feed',
  initialState
})

export default feedSlice.reducer