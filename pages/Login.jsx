import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div
                className="
                    w-[540px] 
                    h-auto 
                    px-[72px] 
                    py-12 
                    bg-white 
                    rounded-[20px] 
                    shadow 
                    backdrop-blur-[100px] 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    gap-8 
                "
            >
                <div className="flex flex-col items-start self-stretch justify-start gap-4 h-7">
                    <div className="text-[#101828] text-[28px] font-semibold leading-7 font-['Poppins']">
                        Login to your account
                    </div>
                </div>

                {success.length > 0 && (
                    <div
                        className="w-full p-4 mb-4 text-green-700 bg-green-100 border border-green-400 rounded"
                        role="alert"
                    >
                        <strong className="font-bold">Congrats!</strong>
                        {/* <span className="block ml-2 sm:inline">{success}</span> */}
                    </div>
                )}

                {error.length > 0 && (
                    <div
                        className="w-full p-4 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
                        role="alert"
                    >
                        <strong className="font-bold">Holy smokes!</strong>
                        {/* <span className="block ml-2 sm:inline">{error}</span> */}
                    </div>
                )}

                <div className="flex flex-col items-start self-stretch justify-start gap-6 h-44">
                    <div className="flex flex-col self-stretch h-[76px] gap-3">
                        <div className="inline-flex items-start self-stretch justify-start gap-3">
                            <div className="grow text-[#344054] text-base font-normal capitalize leading-none font-['Poppins']">
                                Email
                            </div>
                        </div>
                        <div className="inline-flex items-start self-stretch justify-start h-12 gap-2">
                            <div
                                className="
                                    flex 
                                    grow 
                                    self-stretch 
                                    px-4 
                                    py-3 
                                    rounded-lg 
                                    border-2 
                                    border-[#d1e9ff] 
                                    items-center 
                                    gap-[5px]
                                "
                            >
                                <div className="flex flex-col grow text-[#344054] text-sm font-normal leading-[14px] font-['Poppins']">
                                    <input
                                        className="border-none outline-none focus:ring-0"
                                        onChange={handleChangeEmail}
                                        type="text"
                                        placeholder="email"
                                    />
                                </div>
                                <div className="flex items-center justify-end gap-2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col self-stretch h-[76px] gap-3">
                        <div className="inline-flex items-start self-stretch justify-start">
                            <div className="grow text-[#344054] text-base font-normal capitalize leading-none font-['Poppins']">
                                Password
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch justify-start h-12 gap-2">
                            <div
                                className="
                                    self-stretch 
                                    px-4 
                                    py-3 
                                    rounded-lg 
                                    border 
                                    border-[#d0d5dd] 
                                    items-center 
                                    gap-[5px] 
                                    inline-flex
                                "
                            >
                                <div className="flex flex-col grow text-[#98a2b3] text-sm font-normal leading-[14px] font-['Poppins']">
                                    <input
                                        className="border-none outline-none focus:ring-0"
                                        onChange={handleChangePassword}
                                        type="password" // Ubah type ke password
                                        placeholder="password"
                                    />
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <div className="relative w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col self-stretch h-[92px] justify-start items-center gap-6">
                    <button
                        className="
                            text-[#fcfcfd] 
                            text-base 
                            font-semibold 
                            leading-none 
                            font-['Poppins']
                            w-full
                        "
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        <div
                            className="
                                self-stretch 
                                h-[52px] 
                                p-4 
                                bg-[#00df9a] 
                                rounded-lg 
                                flex 
                                justify-center 
                                items-center 
                                gap-[5px]
                                hover:bg-green-500
                            "
                        >
                            {/* {loading ? (
                                <div className="flex items-center gap-2">
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    <span>Loading</span>
                                </div>
                            ) : (
                                "Login"
                            )} */}
                        </div>
                    </button>
                    <div className="inline-flex items-start justify-start gap-2">
                        <div className="text-[#98a2b3] text-base font-normal capitalize leading-none font-['Poppins']">
                            Don't have an account?
                        </div>
                        <div className="text-[#00df9a] text-base font-normal capitalize leading-none font-['Poppins']">
                            <Link to="/register">
                                <p>Sign Up</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;