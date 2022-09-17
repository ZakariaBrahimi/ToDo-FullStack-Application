import Task from '../components/Task'
import { useEffect, useContext} from 'react'
import axios from 'axios'
import AddTask from '../components/AddTask'
import {useNavigate} from 'react-router-dom'
import TasksListGlobalState from '../Context/TasksListGlobalState'
import Footer from '../components/Footer'

export default function TasksList() {
  let navigate = useNavigate()
  const {tasks, setTasks} = useContext(TasksListGlobalState)

  useEffect(()=>{
    axios({
      baseURL: "http://127.0.0.1:8000",
      url: '/api/tasks-list/',
      method: 'get',
      headers:{"Authorization": `Token ${window.localStorage.getItem('token')}`}
    }).then((response)=>{      
      const data = response.data
      setTasks(data)
      console.log(data)
    }).catch((err)=>{
      console.log(err.response.data.detail)
      navigate('/')
    })
  }, [navigate, setTasks]) //TODO: applying side effect only when tasks list is change

  if(window.localStorage.getItem('token')){
    return (
      <div>
  <div class=" mt-16 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-4/6">
          { /* Header Section */} 
              <AddTask setTasks={setTasks}/>
          {/* Tasks List */}
          {
            tasks.map((task)=>{
              return <Task setTasks={setTasks} key={task['id']} task={task}/>
            })
          }
          { /* Footer Section */}
          <Footer tasks={tasks} setTasks={setTasks} />
      </div>
  </div>
      </div>
    )}
}