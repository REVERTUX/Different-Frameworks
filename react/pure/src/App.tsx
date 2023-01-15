import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Posts from './posts'
import PostEntity from './posts/PostEntity'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/:id' element={<PostEntity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
