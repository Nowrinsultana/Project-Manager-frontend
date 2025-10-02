import Footer from './Component/Footer'
import Heder from './Component/Heder'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Heder />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
