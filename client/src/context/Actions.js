export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const LoginSuccessful = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = (user) => ({
    type : "LOGIN_FAILURE"
})

export const Logout = (user) => ({
    type : "LOGOUT"
})