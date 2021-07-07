export const LoginStart =(userCredentials) => ({
    type:"LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFaliur = () => ({
    type: "LOGIN_FALIUR"
})

export const Logout = () => ({
    type: "LOGOUT"
})

export const UpdateStart =(userCredentials) => ({
    type:"UPDATE_START"
})

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
})

export const UpdateFaliur = () => ({
    type: "UPDATE_FALIUR"
})
