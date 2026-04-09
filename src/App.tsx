import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CourseDetail from './pages/courses/[id]'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  )
}

export default App