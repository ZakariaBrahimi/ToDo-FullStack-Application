import axios from "axios"
import { Link, useNavigate, Navigate} from "react-router-dom"
import { useState } from "react"


const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    const login = (e)=>{
        e.preventDefault()
        axios({
            baseURL: 'https://todo-fullstack-application-production.up.railway.app',
            url: '/auth/login/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "username": username,
                "password": password
            }
        }
        ).then((response)=>{
            window.localStorage.setItem('token', response.data.key)
            console.log("this is response")
            console.log(window.localStorage.getItem('token  '));
            navigate('/profile/')
        }).catch((err)=>{
            console.log("this is error")
            console.log(err.response.data.non_field_errors[0])
        })
    }
    if (window.localStorage.getItem('token')){
        return <Navigate to='/profile' replace />
    }
    return (
        <>
        <div class="max-w-lg mx-auto  bg-white p-8 pb-0 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Login</h1>
        <p class="text-slate-500">Hi, Welcome back 👋</p>
        {/*<div class=""> TODO: add a login functionality using google account
            <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150" >
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt="" /> <span>Login with Google</span>
            </button>
    </div>*/}
        <form class="my-10" onSubmit={(e)=>{login(e)}}>
            <div class="flex flex-col space-y-5">
                <label for="username">
                    <p class="font-medium text-slate-700 pb-2">Username address</p>
                    <input value={username} onChange={(e)=> setUserName(e.target.value)} id="username" name="username" type="text" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter username address" />
                </label>
                <label for="password">
                    <p class="font-medium text-slate-700 pb-2">Password</p>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                </label>
                <div class="flex flex-row justify-between">
                    <div>
                        <label for="remember" class="">
                            <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                            Remember me
                        </label>
                    </div>
                    <div>
                        <Link to="/password-reset" class="font-medium text-indigo-600">Forgot Password?</Link>
                    </div>
                </div>
                <button type="submit" class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                </button>
                
                <p class="text-center">You're not registered yet ?
                <Link to='/signup'>
                <span class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span>
                  </span></Link></p>
            </div>
        </form>
    </div>
        </>
    )
}

export default Login