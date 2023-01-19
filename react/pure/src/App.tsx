import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Posts from './posts'
import PostEntity from './posts/PostEntity'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostEntity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
