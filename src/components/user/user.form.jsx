import { EyeInvisibleOutlined, EyeTwoTone, LoginOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import axios from "axios";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const handleClickBtn = () => {

        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }

        axios.post(URL_BACKEND, data)
            .then((response) => {
                // alert(JSON.parse(response));
                console.log(">>> check response data: ", response.data)
                console.log(">>> check response data x2: ", response.data.data)
            })
            .catch((error) => {
                // alert(JSON.parse(error));
                console.log(">>> check error: ", error)

            })
        console.log("Check form info: ", { fullName, email, password, phone });
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