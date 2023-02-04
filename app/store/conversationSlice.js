import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    conversations: [
        {
            user: {
                id: 2,
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/200?img=22'
            },
            lastMessage: 'when an unknown printer took a galley of type',
            status: "Online"
        },
        {
            user: {
                id: 3,
                name: 'Dennis Reynolds',
                avatar: 'https://i.pravatar.cc/200?img=25'
            },
            lastMessage: 'Where can I get some?',
            status: "Offline"
        },
        {
            user: {
                id: 4,
                name: 'Dennis Reynolds',
                avatar: 'https://i.pravatar.cc/200?img=36'
            },
            lastMessage: 'Where can I get some?',
            status: "Online"
        },
        {
            user: {
                id: 5,
                name: 'Dennis Reynolds',
                avatar: 'https://i.pravatar.cc/200?img=36'
            },
            lastMessage: 'Where can I get some?',
            status: "Online"
        },
        {
            user: {
                id: 2,
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/200?img=22'
            },
            lastMessage: 'when an unknown printer took a galley of type',
            status: "Online"
        },
        {
            user: {
                id: 2,
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/200?img=22'
            },
            lastMessage: 'when an unknown printer took a galley of type',
            status: "Online"
        },
        {
            user: {
                id: 3,
                name: 'Dennis Reynolds',
                avatar: 'https://i.pravatar.cc/200?img=25'
            },
            lastMessage: 'Where can I get some?',
            status: "Offline"
        },
    ]
}

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState
})

export default conversationSlice.reducer