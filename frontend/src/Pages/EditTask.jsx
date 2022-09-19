import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const EditTask = () => {
  const location = useLocation()
  const { data } = location.state
    const navigate = useNavigate()
    const [task, setTask] = useState('')
    let editTask = (e)=>{
        e.preventDefault()
        axios({
            baseURL: process.env.REACT_APP_API_URL,
            method: 'post',
            url: '/api/edit-task/',
            headers:{
                "Authorization": `Token ${window.localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            data:{
                'task': task,
                "id": data.id
            }
        }).then((response)=>{
          console.log(response.data) //TODO: handel the success alert functionality
            navigate('/tasks-list')
        }).catch((err)=>console.log(err)) //TODO: handel the error alert functionality
    }
    return (
    <>
    <div class="flex justify-center">
  <form onSubmit={editTask} class="mb-3 xl:w-96">
    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700 text-2xl mt-12"
      >Edit Task</label>
    <textarea value={task ? task : data.content} onChange={(e)=>setTask(e.target.value)}
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    
    ></textarea>
    <button type="submit" class="mt-6 mr-4 bg-blue-700 px-4 py-2 rounded-md text-white">Save Changes</button>
    <Link to='/tasks-list' class="mt-6 mr-4 bg-gray-700 px-5 py-3 rounded-md text-white">Back</Link>
  </form>
</div>
    </>
  )
}

export default EditTask