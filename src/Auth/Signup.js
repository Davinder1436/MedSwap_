import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Flex, useColorModeValue, } from "@chakra-ui/react"


import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "./../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
}

const auth = getAuth(app);

export default function Signup() {

    const [formData, setFormData] = useState({

        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const createUser = () => {
        console.log("clicked")
        if (!handleValidations()) {
            return;
        }
        createUserWithEmailAndPassword(auth, formData.email, formData.password).then((value) => {
            console.log(value)
        })

    }
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { setUser(user); }

            else {
                console.log("you are logged out")
                setUser(null);
            }
        })
    })


    const toastOptions = { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark" }
    const handleValidations = () => {
        const { password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password should be same", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("Password should be greater than 8 characters", toastOptions);
            return false;
        }

        return true;
    }



    return (

        <div bg={useColorModeValue("blue.900", "blue.100")} w="100vh" h="100vh">

            <Box >
                <Flex>



                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" >

                            <div>
                                <div>

                                    <div>

                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-500">
                                                Password
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-500">
                                            Confirm Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <button

                                    name="next"
                                    onClick={createUser}

                                    className="flex w-auto ml-12 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Next
                                </button>
                            </div>
                            <div>
                                <button

                                    name="SignIn With Google"
                                    onClick={signInWithGoogle}

                                    className="flex w-auto ml-12 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    SignIn With Google
                                </button>
                            </div>
                        </form>

                        <div>{user}</div>

                        <ToastContainer />

                    </div>

                </Flex>
            </Box>

        </div>
    )
}