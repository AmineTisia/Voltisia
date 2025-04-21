import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clients from './pages/Clients'
import Chantiers from './pages/Chantiers'
import Login from './pages/Login'
import Admin from './pages/Admin'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Clients />} />
        <Route path="/chantiers" element={<Chantiers />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
