
export const loginAPI = (data) => {
    return dispatch => {
        const request = {
            type: "SEND_MESSAGE",
            api: "LOGIN",
            payload: data.credentials
        }
        dispatch(request);
    };
};

export const logoutAPI = data => {
    return {
        type: "SEND_MESSAGE",
        api: "LOGOUT",
        payload: data
    };
};

export const registerAPI = data => {
    return dispatch => {
        const request = {
            type: "SEND_MESSAGE",
            api: "REGISTER",
            payload: data
        }
        dispatch(request);
    };
};