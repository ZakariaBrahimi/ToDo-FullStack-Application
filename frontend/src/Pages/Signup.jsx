import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Signup() {
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [username, setUsername]   = useState('')
    const [email, setEmail]         = useState('')
    let navigate = useNavigate()
    
    const signup = (e)=>{
        e.preventDefault()
        axios({
            baseURL: 'http://127.0.0.1:8000',
            url: '/auth/registration/',
            method: 'post',
            headers:{"Content-Type": "application/json"},
            data:{
                "username": username,
                "email": email,
                "password1": password1,
                "password2": password2
            }
        }).then((response)=>{
            const data = response.data.detail
            console.log(data)
            navigate('/')
        }).catch((err)=>{
            const errors_data = err.response.data
            console.log(errors_data)
            

        })
    }
  return (
    <div>
      <div class="max-w-lg mx-auto  bg-white p-8 pb-0 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Sign Up</h1>
        <p class="text-slate-500">Hi, Welcome 👋</p>
        {/*<div class=""> TODO: add a signup functionality using google account
          
            <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150" >
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt="" /> <span>Sign Up with Google</span>
            </button>
  </div>*/}
        <form onSubmit={signup} class="my-10">
            <div class="flex flex-col space-y-5">
                <label for="username">
                    <p class="font-medium text-slate-700 pb-2">Username</p>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} id="username" name="username" type="text" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter Username" />
                </label>
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email address</p>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                </label>
                <label for="password1">
                    <p class="font-medium text-slate-700 pb-2">Password</p>
                    <input value={password1} onChange={(e)=> setPassword1(e.target.value)} id="password1" name="password1" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                </label>
                <label for="password2">
                    <p class="font-medium text-slate-700 pb-2">Confirm Password </p>
                    <input value={password2} onChange={(e)=> setPassword2(e.target.value)} id="password2" name="password2" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                </label>
                <div class="flex flex-row justify-between">
                    <div>
                        <label for="remember" class="">
                            <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="#" class="font-medium text-indigo-600">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit" class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Register</span>
                </button>
                
                <p class="text-center">You're Already registered ?
                <Link to='/login'>
                <span href="#" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>log in now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span>
                  </span></Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}
