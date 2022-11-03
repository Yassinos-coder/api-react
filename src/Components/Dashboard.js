import axios from 'axios';
import React, { useState, useEffect } from 'react';
import noLogo from '../img/unknwn.png';
import { Link } from 'react-router-dom';
import '../App.css'

// Get User Api : https://jsonplaceholder.typicode.com/users
// Get User By Id API : https://jsonplaceholder.typicode.com/posts?userId=1
// Get Post of User By ID API : https://jsonplaceholder.typicode.com/comments?postId=1

const Dashboard = () => {
    const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(userRes => setUserList(userRes.data))
    .catch(err =>console.log(err))
  },[]);

  return (
   <>

   <div className="App">
      <div className="userDisplay">
        {
          userList.map((user, id) =>(
            <>
              <div key={id} className="userBox">
                <img className='noLogo-img' src={ noLogo } alt="No Profile" />
                <p key={id}>Userame: { user.username }</p>
                <p>Name: { user.name }</p>
                <p>Email:  { user.email } </p>
                <p>PhoneNumber: { user.phone } </p>
                <p>Website <a href={'https://'+ user.website} rel="noopener noreferrer" target="_blank">{user.website}</a> </p>
                <Link to={`/posts/${user.id}`} state={{id:user.id, name:user.name, username:user.username, phone:user.phone, email:user.email, web:user.website}}>
                    <button className='btn-see-posts'>See Posts</button> 
                </Link>
              </div>
            </>
          ))
        }
      </div>
   </div>
   </>
  );

}

export default Dashboard