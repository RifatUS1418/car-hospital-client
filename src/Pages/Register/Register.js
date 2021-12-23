import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import registerImg from '../../images/banner1.jpg';
import { useDispatch } from 'react-redux';
import { submitData } from '../../redux/actions/index';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    // console.log(loginData);
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();
    const dispatch = useDispatch();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    // const handleLoginSubmit = e => {
    //     // if (loginData.password !== loginData.password2) {
    //     //     alert('Your password did not match');
    //     //     return
    //     // }
    //     // registerUser(loginData.email, loginData.password, loginData.name, navigate);
    //     registerUser(loginData.email, loginData.password);
    //     e.preventDefault();
    // }

    return (
        <div>
            <div className='flex mt-5 mb-10'>
                <div className='w-6/12'>
                    <img src={registerImg} alt="" />
                </div>
                <div className="w-6/12 flex items-center justify-center">
                    <div className='w-full'>
                        <div className="flex justify-center">
                            <h1 className='form-head text-2xl p-5 w-9/12 font-semibold mb-5'>Register</h1>
                        </div>
                        {/* <form onSubmit={handleLoginSubmit}> */}
                        <form onSubmit={() => dispatch(submitData(loginData))}>
                            <div className='flex justify-center mb-5'>
                                <input type="text"
                                    name="name"
                                    className="mt-1 block w-9/12 border p-5 text-2xl page-text"
                                    placeholder='Your Name*'
                                    onBlur={handleOnBlur} />
                            </div>
                            <div className='flex justify-center mb-5 page-text'>
                                <input type="email"
                                    name="email"
                                    className="mt-1 block w-9/12 border p-5 text-2xl"
                                    placeholder='Your Email*'
                                    onBlur={handleOnBlur} />
                            </div>
                            <div className='flex justify-center mb-5 page-text'>
                                <input type="password"
                                    name="password"
                                    className="mt-1 block w-9/12 border p-5 text-2xl"
                                    placeholder='Password*'
                                    onBlur={handleOnBlur} />
                            </div>
                            <div className='flex justify-center mb-5 page-text'>
                                <input type="password"
                                    name="password2"
                                    className="mt-1 block w-9/12 border p-5 text-2xl"
                                    placeholder='Re-Type Password*'
                                    onBlur={handleOnBlur} />
                            </div>
                            <div className='flex justify-center'>
                                <button className='page-text text-2xl font-semibold page-button px-10 py-5 text-white w-9/12 mb-5' type="submit">Register</button>
                            </div>
                            {/* <div className='flex justify-center'>
                                <button className='page-text text-2xl font-semibold page-button px-10 py-5 button-color w-9/12' onClick>Google Sign In</button>
                            </div> */}
                            {user?.email && alert("user created successfully")}
                            {/* {authError && alert(authError)} */}
                        </form>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Register;