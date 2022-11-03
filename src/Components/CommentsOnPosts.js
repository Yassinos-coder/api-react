import axios from 'axios'
import '../App'
import { useLocation, Link  } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import commentsBanner from '../img/comments.png'
import noLogo from '../img/unknwn.png'

const CommentsOnPosts = () => {
    const location = useLocation();
    const [Comments, setComments] = useState([]);
    // post_* is to pass post data for display in commentsOnPosts
    const post_id = location.state.post_id
    const post_title = location.state.post_title
    const post_body = location.state.post_body
    const user_id_stored = location.state.user_id // get user id stored in browser
    const posts = location.state.user_posts
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`)
        .then(postComments =>setComments(postComments.data))
        .catch(err => console.error('error in api'+ err))
    })
  return (
    <>
        <div className="Header">
            <Link to="/">
                <button className='header-home-btn'>Home</button>
            </Link>
            <Link to={`/posts/${user_id_stored}`} 
            state={{user_id_stored, name: localStorage.name, username: localStorage.username, phone: localStorage.phone, email: localStorage.email, web: localStorage.web, posts}}>
                <button className='header-posts-btn'>Back to posts</button>
            </Link>
        </div>
        <div className="commentsContainer">
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
            <div  className="comments-post-box">
                <img className='post-banner-img' src={ commentsBanner } alt="Comments Banner" />
                <p className='post-id'>#{post_id}</p>
                <p className='post-title'>{post_title}</p>
                <h3 className='body-caption'>Caption</h3> <br />
                <p className="post-body"> {post_body} </p>
                <hr className='hr' />
                <h2>Comments</h2>
                {
                Comments.map((comment, index) => (
                    <>
                        <div className="comment"> 
                            <p className='comment-name'>User'S Name: {comment.name}</p>
                            <p className='comment-email'>User'S Email : {comment.email}</p>
                            <p className='comment-body'>{comment.body}</p>
                        </div>
                    </>
                ))
            }
            </div> 
        </div>
    </>
  )
}

export default CommentsOnPosts
