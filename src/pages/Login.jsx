import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Login() {
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log("Connecté :", result.user)
      navigate("/admin") // Redirige après login
    } catch (error) {
      console.error("Erreur lors de la connexion :", error)
    }
  }

  useEffect(() => {
    const user = auth.currentUser
    if (user) {
      navigate("/admin")
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl mb-6">Connexion à Voltisia</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Se connecter avec Google
      </button>
    </div>
  )
}

export default Login
