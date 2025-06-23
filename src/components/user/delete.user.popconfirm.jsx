import { useState } from "react";
import { deleteUserAPI } from "../../services/api.service";
import { Button, Modal, Input, Popconfirm } from "antd";

const DeleteUserPopconfirm = async (props) => {
    const { loadUser, id, setId } = props;

    const res = await deleteUserAPI(id);
    if (res.data) {
        notification.success(
            {
                message: "Create A New User",
                description: "Create successfully" + " at " + res.data.createdAt + " and FullName is: " + fullName + " with email: " + res.data.email + " and phone is: " + res.data.phone,
                duration: 3,
                showProgress: true,
            }
        )
        resetAndCloseModal();
        await loadUser();
    }
    else {
        notification.error(
            {
                message: "Error Create A New User Failed",
                description: JSON.stringify(res.message),
                duration: 3,
                showProgress: true,
            }
        )
    }


    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
}

export default DeleteUserPopconfirm;