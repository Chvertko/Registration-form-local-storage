import { createSlice } from "@reduxjs/toolkit"
import Confetti from 'react-confetti'
import hiImg from '../assets/robot.png'

const initialState = {
    email: '',
    password: '',
    happening : 'Registration',
}
const formSlice = createSlice({
    name: '@@form',
    initialState,
    reducers: {
        setEmail : (state,action) =>  { 
                state.email = action.payload
            },
        setPassword: (state,action) => {
                state.password = action.payload
            },
        setHappening: (state,action) => {
                if(localStorage.getItem('email') === null && localStorage.getItem('password') === null) {
                    state.happening = action.payload
                    return initialState
                }
                if(localStorage.getItem('email') != null && localStorage.getItem('password') != null){
                    state.happening = action.payload
                }
            },
        }
    })
export const selectEmail = state => state.form.email
export const selectPassword = state => state.form.password
export const selectHappening = state => state.form.happening

export const {setEmail,setPassword,setHappening,sayHello} = formSlice.actions
export const formReducer = formSlice.reducer