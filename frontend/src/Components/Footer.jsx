import React from 'react'
import axios from 'axios'

const Footer = ({tasks, setTasks}) => {
    const clearAllCompletedTasks = ()=>{
        axios({
          baseURL: process.env.REACT_APP_API_URL,
          url: "/api/clear-all-completed-tasks/",
          method: 'post',
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${window.localStorage.getItem('token')}`
          }
        }).then((response)=>{
          console.log(response.data) //TODO: handel the success alert functionality
          setTasks(prev=>response.data)
        }).catch((err)=>console.log(err)) //TODO: handel the error alert functionality
      }
  return (
    <div class="flex text-gray-600 mt-5 place-content-evenly">
        <span>{tasks.length} Tasks left</span>
        <span>
            <button onClick={clearAllCompletedTasks} type='button'>Clear All Completed Tasks</button>
        </span>
    </div>
  )
}

export default Footer