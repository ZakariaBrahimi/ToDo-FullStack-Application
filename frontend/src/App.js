import TasksList  from './pages/TasksList'
import Navbar  from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';
import EditTask from './pages/EditTask';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/tasks-list' element={<TasksList />}  />
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