import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Form, Input, message, notification, Row } from "antd";
import { json, Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        setIsLoading(true)
        const res = await loginAPI(values.email, values.password)

        if (res.data) {
            message.success("Login successfully")
            setIsLoading(false)
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user)
            navigate("/")
        }
        else {
            notification.error({
                message: "Error Login",
                description: JSON.stringify(res.message)
            })
        }
        setIsLoading(false)
    }

    return (
        <>
            <Row justify={"center"} align="middle" style={{ minHeight: "100vh" }} >
                <Col xs={24} sm={24} md={16} lg={8} style={{ padding: "0 10px" }}>
                    <fieldset style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: 8,
                        padding: 16,
                        margin: 5
                    }}>
                        <legend style={{ padding: "0 8px" }}>Đăng Nhập</legend>

                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            style={{ margin: "10px" }}
                        >

                            <h2 style={{ margin: "10px 0", textAlign: "center" }}>Login Now</h2>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!'
                                    },
                                ]}
                            >
                                <Input.Password onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        form.submit();
                                    }
                                }} />
                            </Form.Item>

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button loading={isLoading} type="primary" onClick={() => form.submit()}>Login</Button>
                                <Link to="/" style={{ display: "flex", alignItems: "center" }}>Go to homepage
                                    <ArrowRightOutlined style={{ margin: "0 5px" }} />
                                </Link>
                            </div>
                        </Form>
                        {/* <hr style={{ borderTop: " 1px solid #eee", margin: "24px 0" }} /> */}
                        <Divider />

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span>No account yet? </span>
                            <Link to="/register" style={{ marginLeft: 4 }}>Register here</Link>
                        </div>
                    </fieldset>
                </Col>
            </Row>
        </>
    );
}

export default LoginPage;