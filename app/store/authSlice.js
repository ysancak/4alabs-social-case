import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 1,
    name: "Dennis Reynolds",
    nickname: '@johndoe',
    avatar: 'https://i.pravatar.cc/200?img=21',
    stats: {
        posts: 35,
        followers: 1552,
        follows: 128
    },
    images: [
        {
            url: 'https://picsum.photos/id/26/600/600',
            width: 600,
            height: 600
        },
        {
            url: 'https://picsum.photos/id/19/600/600',
            width: 800,
            height: 600
        },
        {
            url: 'https://picsum.photos/id/36/600/600',
            width: 600,
            height: 900
        },
        {
            url: 'https://picsum.photos/id/49/600/600',
            width: 600,
            height: 900
        }
    ],
    saved: [
        
    ]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState
})

export default authSlice.reducer