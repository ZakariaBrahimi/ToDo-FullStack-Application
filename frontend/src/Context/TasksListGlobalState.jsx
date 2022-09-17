import {createContext, useState} from 'react'

const TasksListGlobalState = createContext()
export const TasksListProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
  return(
    <TasksListGlobalState.Provider value={{tasks, setTasks}}>
        {children}
    </TasksListGlobalState.Provider>
  )
}

export default TasksListGlobalState;