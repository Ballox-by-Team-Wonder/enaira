import { createSlice } from '@reduxjs/toolkit'
import { removeUserToken } from '../../services/auth.service'
import { asyncRequest } from '../../helpers/async-thunk-request.helper'
import * as asyncReducers from './auth.extra-reducers'

const namespace = 'auth'

//===================================================================================== 
// async thunks 
//===================================================================================== 
export const loginUser = asyncRequest(`${namespace}/loginUser`, '/api/user/login', 'post')

export const signupUser = asyncRequest(`${namespace}/signupUser`, '/api/user/signup', 'post')

export const getLoggedInUser = asyncRequest(`${namespace}/getLoggedInUser`, '/api/user/getLoggedInUser', 'get')



const DEFAULT = { authStatus: null, userData: null, authError: null }

//===================================================================================== 
// slice
//=====================================================================================
const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: DEFAULT
    },
    
    reducers: {
        logout(state) {
            state.user = DEFAULT
            removeUserToken()
        }
    },

    extraReducers: {
        [loginUser.pending]: asyncReducers.authUserPending,
        [loginUser.fulfilled]: asyncReducers.authUserFulfilled,
        [loginUser.rejected]: asyncReducers.authUserRejected,

        [signupUser.pending]: asyncReducers.authUserPending,
        [signupUser.fulfilled]: asyncReducers.authUserFulfilled,
        [signupUser.rejected]: asyncReducers.authUserRejected,

        [getLoggedInUser.pending]: asyncReducers.authUserPending,
        [getLoggedInUser.fulfilled]: asyncReducers.getLoggedInUserFulfilled,
        [getLoggedInUser.rejected]: asyncReducers.authUserRejected,
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer