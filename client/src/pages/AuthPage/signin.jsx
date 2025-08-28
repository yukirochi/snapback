import { useState } from "react"
import { NavLink } from "react-router-dom"
import Signin_Auth from "./auth/Signup_Auth"

export default () => {
    let [username, setusername] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("") 
    
    let submit = async() => {
        let {msg, status} = await Signin_Auth(username,email,password)
        if(msg) alert(msg);
    } 
    
    
    return (
        <main className="w-full h-[88%] flex flex-col items-center justify-center sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <NavLink to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</NavLink></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            submit()
                        }}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                onChange={(e)=> setusername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  onChange={(e)=> setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  onChange={(e)=> setpassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-black hover:opacity-[80%] rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                    <div className="mt-5">
                      
                    </div>
                </div>
            </div>
        </main>
    )
}