import Home from "@/pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreatePost from "./componants/CreatePost"
import EditPost from "./componants/EditPost"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
