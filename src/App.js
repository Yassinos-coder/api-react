import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import UserPosts from './Components/UserPosts'
import CommentsOnPosts from './Components/CommentsOnPosts';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path='/posts/:id' element={<UserPosts />} />
              <Route path='/posts/:id/comments/:id' element={<CommentsOnPosts />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
