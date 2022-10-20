import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../store/actions/userActions';
import { LoginForm } from '../types/user';
import api from '../utils/api';
import erros from '../utils/showError';
import { AppState } from '../store';
import { useEffect } from 'react';
import errors from '../utils/showError';

function Login() {
 const navigate = useNavigate();
 const location = useLocation();
 const dispatch = useDispatch();
 const {data, loading, error} = useSelector((state: AppState) => state.user);

 const onFinish = (values: LoginForm) => {
  dispatch(login(values));
};

    useEffect(() => {
      error && errors(error);
    }, [error])

    useEffect(() => {
      data.username && errors('Login oldu');
    }, [data.username])

    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token) {
        navigate('/');
      }
    },[data]);
    
    // const onFinish = async (values: any) => {
    //     try {
    //         console.log('Success:', values);
    //         //await api.post('/users/login', values);
    //         navigate('/');
    //     } catch (error: any) {
    //         erros(error);
    //     }
        
    //   };
    
    //   const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    //     erros(errorInfo);
    //   };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <h2 style={{textAlign: 'center'}}>Login</h2>
        {location.state?.newSignUp && <p> newSignUp'tan geldi.</p>}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login;