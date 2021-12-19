import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/tire (1).jpg'
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)

    }

    const handleLoginSubmit = e => {
        // loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        // signInWithGoogle(location, navigate);
    }
    return (
        <div>

            <div className='flex'>
                <div className='w-6/12'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-6/12'>
                    <div className='w-full'>
                        <div className="flex justify-center">
                            <h1 className='form-tag text-2xl p-5 w-9/12 font-semibold mb-5'>Login</h1>
                        </div>
                        <form>
                            <div className='flex justify-center mb-5'>
                                <input type="text" class="mt-1 block w-9/12 border p-5 text-2xl page-text" placeholder='Your Email*' />
                            </div>
                            <div className='flex justify-center mb-5 page-text'>
                                <input type="text" class="mt-1 block w-9/12 border p-5 text-2xl" placeholder='Your Password*' />
                            </div>
                            <div className='flex justify-center'>
                                <button className='page-text text-2xl font-semibold page-button px-10 py-5 text-white w-9/12 mb-5'>Login</button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='page-text text-2xl font-semibold page-button px-10 py-5 button-color w-9/12'>Google Sign In</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;