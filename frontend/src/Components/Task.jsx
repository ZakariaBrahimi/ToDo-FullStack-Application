import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Task({task, setTasks}) {
  const [isRemoved, setIsRemoved] = useState(false)
  const removeHandler = ()=>{
    axios({
      baseURL: "http://127.0.0.1:8000",
      method: 'post',
      url: '/api/remove-task/',
      headers:{
        "Authorization": `Token ${window.localStorage.getItem('token')}`,
        "Content-Type" : 'application/json' 
      },
      data:{
        'id': task['id']
      }
    }).then((response)=>{
      const data = response.data
      setIsRemoved(true)
      setTasks(prev=>data)
    })
  }
  const [isComplete, setIsComplete] = useState(task['isComplete'])
  
  const statusHandler = ()=>{
    axios({
      baseURL: "http://127.0.0.1:8000",
      method: 'post',
      url: '/api/change-status/',
      headers:{
        "Authorization": `Token ${window.localStorage.getItem('token')}`,
        "Content-Type" : 'application/json' 
      },
      data:{
        'id': task['id']
      }
    }).then(()=>{
      if(isComplete === true){
        setIsComplete(false)
      }else{
        setIsComplete(true)
      }
    })
  }
  if (isRemoved){
    return 
  }
  return (
    <div>
      { /* First Task */}
      <div class="flex mt-2 mb-2  items-center justify-between">
        <p className="w-4/6 text-grey-darkest">{task['task']}</p>
        <div className="">
          <button onClick={statusHandler} className="flex-no-shrink p-2 ml-2 border-2 rounded text-green-600 border-green-600 hover:text-white  hover:bg-green-600">{isComplete ? "Done" : "Not Done"}</button>
          <button onClick={removeHandler} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
    
          <Link to='/edit-task' state={{ data: {id: task['id'], content: task['task']} }} className="flex-no-shrink p-3  ml-2 border-2 rounded text-blue-600 border-blue-600 hover:text-white hover:bg-blue-600" >Edit</Link>
        </div>
      </div>
      <hr/> 
    </div>
  )
};


