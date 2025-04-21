import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clients from './pages/Clients'
import Chantiers from './pages/Chantiers'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Clients />} />
        <Route path='/chantiers' element={<Chantiers />} />
      </Routes>
    </Router>
  )
}

export default App