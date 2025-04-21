import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

function Logout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login")
    })
  }

  return (
    <button onClick={handleLogout} className="text-red-500 underline">
      Déconnexion
    </button>
  )
}

export default Logout
