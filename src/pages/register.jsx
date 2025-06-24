import { Button, Form, Input, Modal, notification } from "antd";

const RegisterPage = () => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(">>> check values: ", values);
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <div style={{ margin: "50px" }}>
                <Form.Item
                    label="FullName"
                    name="fullNameEmNamNe"
                // rules={[{ required: true, message: 'Please input your fullname!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                // rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phone"
                // rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input />
                </Form.Item>

                {/* <button type="submit">Register</button> */}

                <div>
                    {/* <Button type="primary" htmlType="submit">Register</Button> */}
                    <Button type="primary" onClick={() => form.submit()}>Register</Button>
                </div>
            </div>
        </Form>
    );
}

export default RegisterPage;