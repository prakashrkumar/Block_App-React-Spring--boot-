import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPost, update } from "../services/Api"

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: ""
  })
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        const res = await getPost(id)
        setPost(res.data)
      } catch {
        setError("Failed to load post")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadPost()
    }
  }, [id])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!post.title.trim() || !post.content.trim() || !post.author.trim()) {
      setError("All fields are required")
      return
    }

    try {
      setSubmitting(true)
      await update(id, post)
      navigate("/")
    } catch {
      setError("Failed to update post")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <p>Loading Post...</p>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit post</h2>
        {error && <p>{error}</p>}
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            placeholder="Enter Post Title"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Content</label>
          <input
            type="text"
            name="content"
            value={post.content}
            placeholder="Enter Post content"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={post.author}
            placeholder="Enter Post author"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {submitting ? "Updating..." : "Update Post"}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditPost
