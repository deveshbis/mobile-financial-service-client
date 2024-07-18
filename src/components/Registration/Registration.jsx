import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

const Registration = () => {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `http://localhost:5000/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
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
                    <form onSubmit={handleSignup} className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                        <div className="mb-12">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Registration</h3>
                        </div>

                        <div>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Name" onChange={handleChange}  value={signupInfo.name}/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="email" type="email" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Email" onChange={handleChange} value={signupInfo.email} />
                            </div>
                        </div>
                        {/* <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="number" type="number" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Number" />
                            </div>
                        </div> */}

                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="password" type="password" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter password" onChange={handleChange} value={signupInfo.password} />
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type="submit"
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                                Sign Up
                            </button>
                            <p className="text-gray-800 text-sm text-center mt-6">Do not have an account <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                Login here</Link></p>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Registration;





