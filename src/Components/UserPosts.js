import '../App';
import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import commentsBanner from '../img/comments.png'
import { useLocation, Link } from "react-router-dom";
import noLogo from '../img/unknwn.png'


function UserPosts() {
    const location = useLocation();
    const [userPost, setUserPost] = useState([])
    localStorage.setItem("user_id", location.state.user_id_stored); // store user id in browser
    localStorage.setItem("name", location.state.name)
    localStorage.setItem("username", location.state.username)
    localStorage.setItem("phone", location.state.phone)
    localStorage.setItem("email", location.state.email)
    localStorage.setItem("web", location.state.web)
    localStorage.setItem("posts", JSON.stringify(location.state.posts))

    let id;


    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(userPosting => setUserPost(userPosting.data))
            .catch(err => console.error('error in api'+ err))
    },[id]);

    return (
    <>
        <div className="Header">
            <Link to="/">
                <button className='header-home-btn'>Home</button>
            </Link>
        </div>
        <div className="postContainer">
            <div className="Post">
                <div  className="profileBox">
                    <img className='user-posts-img-noLogo' src={noLogo} alt="" />
                    <div className="p-profileBoxData">
                        <p>Name:  { location.state.name } </p>
                        <p>UserName:  { location.state.username }</p>
                        <p>PhoneNumber:  { location.state.phone }</p>
                        <p>Email:  { location.state.email }</p>
                        <p>WebSite:  { location.state.web }</p>
                    </div>
                </div>
               
                {
                    userPost.map((post, index) =>(
                        <>
                            
                            <div key={index} className="post-box">
                                <img className='post-banner-img' src={ commentsBanner } alt="Comments Banner" />
                                <p className='post-id'>#{post.id}</p>
                                <p className='post-title'>{post.title}</p>
                                <h3 className='body-caption'>Caption</h3> <br />
                                <p className="post-body"> {post.body} </p>
                                <Link to={`/posts/${id}/comments/${post.id}`}  state={{post_id:post.id, user_id: id , name: location.state.name, username: location.state.username, phone: location.state.phone,email: location.state.email, web:location.state.name
                                ,post_title : post.title,post_body:post.body, user_posts:userPost
                                }}>
                                    <button className='posts-comments-btn'>See Comments</button>
                                </Link>
                            </div> 
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default UserPosts
