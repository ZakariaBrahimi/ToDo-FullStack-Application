import TasksList  from './components/TasksList'
import Navbar  from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      <Navbar />



      <Routes>
        <Route path='/tasks-list' element={<TasksList />}  />   
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