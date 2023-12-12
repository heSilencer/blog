///Dummy-posts-data
import { DummyPosts } from "../data/data"
///uSeState
import { useState } from "react"
///components
import PostItem from "./PostItem"
export default function Posts() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="posts">
      {/* ............Head Post............ */}
      {/* <div className="head-post-aria"><Headpost/></div> */}
       { posts.length > 0 ?<div className="container posts-container">
          {
                posts.map(({id,Image,authorId,category,title,des}, index)=> 
                <PostItem key={index} Image={Image} category={category} 
                authorId={authorId} title={title} des={des} postdId={id}/>)
            }
            
       </div> : <h2 className="error-center">No Posts Found</h2>}
    </section>
  )
}
