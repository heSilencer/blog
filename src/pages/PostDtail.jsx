//Router Link.....


import { Link } from "react-router-dom"
//component.............
import PostAuthor from "../components/PostAuthor"
//PostDtail Image
import PostDtailImage from '../assets/1.jpg'
export default function PostDtail() {
  return (
    <section>
        <div className="container PostDtail-container">
           <div className="postdtail-top">
            <PostAuthor/>
           
           <div className="postdtail-buttons">
              <Link to={'/post/werwer/edit'} className="btn btn-sm btn-primary">
                Edit
              </Link>
              <Link to={'/post/werwer/edit'} className="btn btn-sm btn-danger">
                Delete
              </Link>
           </div>         
        </div>
        <h1>This is the title for Robot</h1>
        <div className="post-dtail-image">
          <img src={PostDtailImage} alt=""/>
        </div>
       <div className="post-dtail-para">
       <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries,   
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries,   
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries,   
        </p>
       </div>
        </div>
    </section>
  )
}
