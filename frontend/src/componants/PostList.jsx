import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deletePost, getPosts } from "../services/Api"

const PostList = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getPosts()
        setPost(response.data)
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error))
      } finally {
        setLoading(false)
      }
    }

    void loadPosts()
  }, [])

  if (loading) {
    return <p>Loading posts...</p>
  }
  if (error) {
    return <p role="alert">Failed to load posts: {error}</p>
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return
    }
    try {
      await deletePost(id)
      setPost((previous) => previous.filter((item) => item.id !== id))
    } catch (error) {
      window.alert(`Failed to delete post: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  if (post.length === 0) {
    return <p>No posts found.</p>
  }

  return (
    <div>
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.id}</h2>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>By: {item.author}</p>
          <div>
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
