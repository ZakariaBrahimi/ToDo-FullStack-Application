import Task from '../components/Task'
import { useEffect, useState} from 'react'
import axios from 'axios'
import AddTask from '../components/AddTask'

export default function TasksList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const addTask = (e)=>{
    e.preventDefault();
    console.log(e)
    axios({
          baseURL: "http://127.0.0.1:8000",
          method: 'post',
          url: '/api/add-task/',
          headers:{
            "Authorization": `Token ${window.localStorage.getItem('token')}`,
            "Content-Type" : 'application/json' 
          },
          data:{
            'task': newTask
          }
        }).then(()=>{
          console.log('done')
        })
      }
  useEffect(()=>{
    axios({
      baseURL: "http://127.0.0.1:8000",
      url: '/api/tasks-list/',
      method: 'get',
      headers:{"Authorization": `Token ${window.localStorage.getItem('token')}`}
    }).then((response)=>{      
      setTasks([response.data])
      console.log('use effect activated')
    })
  }, [newTask]) // applying side effect only when tasks list is change
  return (
    <div>
<div class=" mt-16 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-4/6">
        { /* Header Section */} 
        <div class="mb-4">
            <h1 class="text-gray-800 font-semibold text-2xl">Todo List</h1>
            <AddTask taskStatus={newTask} setNewTask={setNewTask} addTask={addTask}/>
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
          <button type='submit'>Clear All Completed Tasks</button>
        </span>
      </div>
        
    </div>
</div>
    </div>
  )
}
