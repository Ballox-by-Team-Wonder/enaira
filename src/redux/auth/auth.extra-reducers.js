import { HTTP_STATUS } from "../../constants/http-status.constant"
import { setUserToken } from "../../services/auth.service"

export const authUserPending = (state) => {
    state.user.authStatus = HTTP_STATUS.PENDING
    state.user.authError = null
}

export const authUserFulfilled = (state, { payload }) => {
    state.user.authStatus = HTTP_STATUS.FULFILLED
    state.user.userData = payload.result
    state.user.authError = null
    setUserToken(payload.token)
}

export const authUserRejected = (state, { payload }) => {
    state.user.authStatus = HTTP_STATUS.REJECTED
    state.user.authError = payload
    state.user.userData = null
}

export const getLoggedInUserFulfilled = (state, { payload }) => {
    state.user.authStatus = HTTP_STATUS.FULFILLED
    state.user.userData = payload
    state.user.authError = null
}


export const incrementUserPointsPending = (state) => {
    state.user.authStatus = HTTP_STATUS.PENDING
    state.user.authError = null
}

export const incrementUserPointsFulfilled = (state, { payload }) => {
    state.user.authStatus = HTTP_STATUS.FULFILLED
    state.user.userData = payload
    state.user.authError = null
}

export const incrementUserPointsRejected = (state, { payload }) => {
    state.user.authStatus = HTTP_STATUS.REJECTED
    state.user.authError = payload
    state.user.userData = null
}