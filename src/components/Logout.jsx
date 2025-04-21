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
    <button
      onClick={handleLogout}
      className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-600 hover:text-white"
    >
      Se déconnecter
    </button>
  )
}

export default Logout
