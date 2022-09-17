import { useState } from "react";
import axios from 'axios'

const AddTask = ({setTasks}) => {
  const [newTask, setNewTask] = useState('')
  const addTask = (e)=>{
    e.preventDefault();
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
        }).then((response)=>{
          const data = response.data
          setTasks(prev=>data)
          console.log('done')
        }).catch((error)=>{
          console.log('there is nothing to add')
        })
        setNewTask(prev=>'')
  }
  return (
    <>
    <div class="mb-4">
      <h1 class="text-gray-800 font-semibold text-2xl">Todo List</h1>
      <form onSubmit={(e)=>{addTask(e)}} class="flex mt-4">
                <input autoFocus="autofocus" value={newTask} onChange={(e)=>setNewTask(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                <button type="submit"
            class=" flex bg-blue-600 text-gray-100 px-6  items-center  hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            Add
          </button>
    </form>
    </div>
    </>
  )
}
export default AddTask;
