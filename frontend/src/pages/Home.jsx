import PostList from "@/componants/PostList"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Blog App</h1>
      <Link to="/create">+ Create Post</Link>
      <PostList />
    </div>
  )
}

export default Home
