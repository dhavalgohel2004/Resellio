import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/dhaval 2 final-01.png';
import AuroraBackground from "../assets/animationComponent/AuroraBackground";

function ForgetPassword() {
  return (
            <AuroraBackground>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <Link to="/" className="flex items-center">
                        <img className="h-[150px]" src={Logo} alt="logo" />   
                    </Link>
                    <div className="w-full p-6 form-wrapper rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:border-gray-700 sm:p-8">
                        <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Forgot your password?
                        </h1>
                        <p className="font-light text-gray-500 dark:text-gray-200">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 dark:text-gray-200">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/terms-condition">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-200">
                                Back to <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login Page</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </AuroraBackground>
  )
}

export default ForgetPassword