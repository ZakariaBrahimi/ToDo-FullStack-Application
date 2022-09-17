import TasksList  from './Pages/TasksList'
import Navbar  from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import UserProfile from './Pages/UserProfile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Page404 from './Pages/Page404';
import EditTask from './Pages/EditTask';
import PasswordReset from './Pages/PasswordReset';
import {TasksListProvider} from './Context/TasksListGlobalState'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/tasks-list' element={<TasksListProvider> <TasksList /> </TasksListProvider>}  />
        <Route path='/password-reset' element={<PasswordReset />}  />
        <Route path='/edit-task' element={<EditTask />}  />
        <Route path='/'           element={<HomePage />}   />    
        <Route path='/profile'    element={<UserProfile />}/> 
        <Route path='/login'      element={<Login />}      />       
        <Route path='/signup'     element={<Signup />}     />      
        <Route path='*' element={<Page404 />}    />     
      </Routes>
      
    </div>
  );
}

export default App;