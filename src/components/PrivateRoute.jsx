import { Navigate } from "react-router-dom"
import { auth } from "../firebase"
import { useEffect, useState } from "react"

function PrivateRoute({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) return <div className="text-white p-4">Chargement...</div>

  return user ? children : <Navigate to="/login" />
}

export default PrivateRoute
