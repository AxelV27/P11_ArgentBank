import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions";

export const userprofile = (userData) =>{
    return{
        type : GET_USERPROFILE,
        payload : userData,
    }
}

export const updateUsername = (username) =>{
    return{
        type : EDIT_USERNAME,
        payload : username,
    }
}