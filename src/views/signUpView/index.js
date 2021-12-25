import React from 'react'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slices/user';
import { signUp } from '../../lib/firebase';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const user = useSelector(store => store.User.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const newUser = await signUp({ email: values.email, password: values.password })
            dispatch(setUser(newUser));
            navigate('/');
        } catch (error) {
            console.log("🚀 ~ file: index.js ~ line 21 ~ onFinish ~ error", error)
        }
    };

    return (
        <div className='SignUpForm'>
            <h1>Sign Up</h1>
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
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
                        <Button type="primary" htmlType="submit" className="login-form-button" block >
                            sign up
        </Button>
                    </Form.Item>
                    Or <a href="/login"> back to Login</a>
                </Form>
            </Card>
        </div>
    )
}

export default SignUp
