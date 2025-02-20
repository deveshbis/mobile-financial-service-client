/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils'


const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `http://localhost:5000/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div>
            <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
                style={{ backgroundImage: "url(https://businesspostbd.com/files/thumbs/daily-media/2022/05/26/800x457/48.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="max-w-md w-full mx-auto">
                    <form onSubmit={handleLogin} className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                        <div className="mb-12">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                        </div>

                        <div>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter email"  onChange={handleChange}  value={loginInfo.email}/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="password" type="password" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter password" onChange={handleChange} value={loginInfo.password}/>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type='submit'
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                                Sign in
                            </button>
                            <p className="text-gray-800 text-sm text-center mt-6">Do not have an account <Link to=
                                "/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                Register here</Link></p>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;