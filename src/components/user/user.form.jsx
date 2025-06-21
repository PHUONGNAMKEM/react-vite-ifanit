import { EyeInvisibleOutlined, EyeTwoTone, LoginOutlined } from '@ant-design/icons';
import { Button, Input, message, notification, Space } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success(
                {
                    message: "Create A New User",
                    description: "Create successfully",
                    duration: 3,
                    showProgress: true,
                }
            )
        }
    }

    return (
        <div className="user-form" style={{ margin: "20px", }}>
            <div style={{ width: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)} placeholder="Enter your FullName" />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email}
                        onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password}
                        onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone}
                        onChange={(event) => setPhone(event.target.value)} placeholder="Enter your Phone number" />
                </div>

                <div>
                    <Button onClick={handleClickBtn} type="primary">Primary Button</Button>
                </div>
            </div>

        </div>
    );
}

export default UserForm;