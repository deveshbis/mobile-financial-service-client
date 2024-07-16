import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
            <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
                style={{ backgroundImage: "url(https://readymadeui.com/background-image.webp); backgroundRepeat: no-repeat; backgroundSize: cover;" }}>
                <div className="max-w-md w-full mx-auto">
                    <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                        <div className="mb-12">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Registration</h3>
                        </div>

                        <div>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Name" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="email" type="email" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="number" type="number" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter Number" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input name="password" type="password" required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter password" />
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type="button"
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                                Sign in
                            </button>
                            <p className="text-gray-800 text-sm text-center mt-6">Do not have an account <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                               Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;