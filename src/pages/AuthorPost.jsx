///Dummy-posts-data..
import { DummyPosts } from "../data/data"

///uSeState...
import { useState } from "react"

///components......
import PostItem from "../components/PostItem"
export default function AuthorPost() {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="authorPosts">
      <h1 className="page-title">Author Posts</h1>
       { posts.length > 0 ?<div className="container authorposts-container">
          {
                posts.map(({id,Image,authorId,category,title,des}, index)=> 
                <PostItem key={index} Image={Image} category={category} 
                authorId={authorId} title={title} des={des} postdId={id}/>)
            }
            
       </div> : <h2 className="error-center">No Posts Found</h2>}
    </section>
  )
}
