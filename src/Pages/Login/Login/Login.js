import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/tire (1).jpg'
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)

    }

    return (
        <div>

            <div className='flex mt-5 mb-10'>
                <div className='w-6/12'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-6/12'>
                    <div className='w-full'>
                        <div className="flex justify-center mt-20">
                            <h1 className='form-head text-2xl p-5 w-9/12 font-semibold mb-5'>Login</h1>
                        </div>
                        <form>
                            <div className='flex justify-center mb-5'>
                                <input type="email"
                                    name="email"
                                    className="mt-1 block w-9/12 border p-5 text-2xl page-text"
                                    placeholder='Your Email*'
                                    onChange={handleOnChange} />
                            </div>
                            <div className='flex justify-center mb-5 page-text'>
                                <input type="password"
                                    name="password"
                                    className="mt-1 block w-9/12 border p-5 text-2xl"
                                    placeholder='Your Password*'
                                    onChange={handleOnChange} />
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className='page-text text-2xl font-semibold page-button px-10 py-5 text-white w-9/12 mb-5'
                                    type='submit'>Login</button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='page-text text-2xl font-semibold page-button px-10 py-5 button-color w-9/12'>Google Sign In</button>
                            </div>
                        </form>
                        {/* {isLoading && <CircularProgress />}
                        {user?.email && alert("Login successfully!")}
                        {authError && alert(authError)} */}
                        <div className='flex justify-center'>
                            <p className="text-2xl font-semibold py-5"><NavLink to='/register'>Are your new here? Please Register</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;