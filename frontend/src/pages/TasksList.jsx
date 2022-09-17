import Task from '../components/Task'
import { useEffect, useState} from 'react'
import axios from 'axios'
import AddTask from '../components/AddTask'
import {useNavigate} from 'react-router-dom'

export default function TasksList() {
  let navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{
    axios({
      baseURL: "http://127.0.0.1:8000",
      url: '/api/tasks-list/',
      method: 'get',
      headers:{"Authorization": `Token ${window.localStorage.getItem('token')}`}
    }).then((response)=>{      
      const data = response.data
      setTasks(data)
    }).catch((err)=>{
      console.log(err.response.data.detail)
      navigate('/')
    })
  }, [navigate]) // applying side effect only when tasks list is change
  const clearAllCompletedTasks = ()=>{
    axios({
      baseURL: "http://127.0.0.1:8000/api",
      url: "/clear-all-completed-tasks/",
      method: 'post',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${window.localStorage.getItem('token')}`
      }
    }).then((response)=>{
      console.log(response.data) //TODO: handel the success alert functionality
    }).catch((err)=>console.log(err)) //TODO: handel the error alert functionality
  }
  
  if(window.localStorage.getItem('token')){
    return (
      <div>
  <div class=" mt-16 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-4/6">
          { /* Header Section */} 
          <div class="mb-4">
              <h1 class="text-gray-800 font-semibold text-2xl">Todo List</h1>
              <AddTask />
          </div>
          {
            
            tasks.map((task)=>{
              return <Task  key={task['id']} task={task}/>
            })
          }
          { /* Footer Section */}
          <div class="flex text-gray-600 mt-5 place-content-evenly">
          <span>{tasks.length} Tasks left</span>
          <span>
            <button onClick={clearAllCompletedTasks} type='button'>Clear All Completed Tasks</button>
          </span>
        </div>
          
      </div>
  </div>
      </div>
    )}

}
