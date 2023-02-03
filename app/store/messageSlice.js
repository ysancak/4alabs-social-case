import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [
        {
            senderId: 2,
            message: "we r goin to c the lions",
            time: 1675350684
        },
        {
            senderId: 2,
            message: "they are doing a feed thing event at the zoo..",
            time: 1675350694
        },
        {
            senderId: 1,
            message: "when?",
            time: 1675350894
        },
        {
            senderId: 1,
            message: "see the lions or sea lions? also, is mac there with u??",
            time: 1675350994
        }
    ]
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages = [...state.messages, action.payload]
    },
  },
})

export const { sendMessage } = messageSlice.actions

export default messageSlice.reducer