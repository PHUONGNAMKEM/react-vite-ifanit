// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }

    return axios.post(URL_BACKEND, data)
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }

    return axios.put(URL_BACKEND, data)
}

const deleteUserAPI = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND)
}

const fetchUserAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND)
}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = "/api/v1/file/upload";

    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);

    return axios.post(URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        avatar: avatar,
        fullName, phone // ở đây viết tắt đi (destructuring) (tức là nó bằng với fullname: fullname thoi á mà) 
    }

    return axios.put(URL_BACKEND, data)
}

const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }

    return axios.post(URL_BACKEND, data)
}

const loginAPI = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: email,
        password: password,
        delay: 2000
    }

    return axios.post(URL_BACKEND, data)
}
const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account";
    return axios.get(URL_BACKEND)
}


const logoutAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout";
    return axios.post(URL_BACKEND)
}

export {
    createUserAPI, updateUserAPI, fetchUserAPI, deleteUserAPI,
    handleUploadFile, updateUserAvatarAPI, registerUserAPI,
    loginAPI, getAccountAPI, logoutAPI
}