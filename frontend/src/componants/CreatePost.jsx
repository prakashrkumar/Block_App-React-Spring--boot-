import { useNavigate } from "react-router-dom"
import { createPost } from "../services/Api"
import {useState} from "react"

const CreatePost = () => {
  const navigate=useNavigate() 
  const[post,setpost]=useState({
    title:"",
    content:"",
    author:""
  })
  const[error,setError]=useState(null)
  const[submitting,setSubmitting]=useState(false)
  const handleChange=(e)=>{
    setpost({...post,[e.target.name]:e.target.value})

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!post.title.trim() || !post.content.trim() || !post.author.trim()){
      setError("All field are required");
      return;
    }
    try{
      setSubmitting(true)
      await createPost(post)
      navigate("/")
    }
    catch{
      setError("Failed to create post")
    }
    finally{
      setSubmitting(false)
    }
  }
  return (
    <div >
     <form onSubmit={handleSubmit}>
        <h2>Create new post</h2>
        {error && (<p>{error}</p>)}
        <div>
          <label>Title</label>
          <input type="text" 
            name="title"
            placeholder="Enter Post Title"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Content</label>
          <input type="text" 
            name="content"
            placeholder="Enter Post content"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Author</label>
          <input type="text" 
            name="author"
            placeholder="Enter Post author"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {submitting ? "Publishing..." :"Publish Post"}
        </button>
     </form>
    </div>
  )
}

export default CreatePost
