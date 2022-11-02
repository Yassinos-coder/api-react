import '../App';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import commentsBanner from '../img/comments.png'
import { useLocation, Link } from "react-router-dom";
import noLogo from '../img/unknwn.png'


function UserPosts() {
    const location = useLocation();
    const [userPost, setUserPost] = useState([])
    const id = location.state.id
    const profile_name = location.state.name
    const profile_username= location.state.username
    const profile_phone= location.state.phone
    const profile_email= location.state.email
    const profile_web= location.state.web


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(userPosting => setUserPost(userPosting.data))
            .catch(err => console.error(err))
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
                        <p>Name:  { location.state.name }</p>
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
                                <Link to={`/posts/${id}/comments/${post.id}`}  state={{post_id:post.id, user_id: id , name: profile_name, username: profile_username,phone: profile_phone,email: profile_email, web:profile_web 
                                ,post_title : post.title,post_body:post.body
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
