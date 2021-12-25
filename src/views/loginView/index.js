import React from 'react'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'
import { useDispatch } from 'react-redux';
import { login } from '../../lib/firebase';
import { setUser } from '../../store/slices/user'
import { useNavigate } from 'react-router';




const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const authenticateUser = await login({ email: values.email, password: values.password })
            dispatch(setUser(authenticateUser));
            navigate('/');
        } catch (error) {
            console.log("🚀 ~ file: index.js ~ line 24 ~ onFinish ~ error", error)
        }
    };

    return (
        <div className='LoginForm'>
            <h1>Login form</h1>
            <Card>
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Log in
        </Button>
        Or <a href="/signup">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
