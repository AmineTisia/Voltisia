import Logout from "../components/Logout"

function Admin() {
  return (
    <div className="text-white p-6">
      <h1 className="text-2xl mb-4">Bienvenue dans l’espace Admin 🚀</h1>
      <p>Tu es connecté avec ton compte Google.</p>

      <div className="mt-6">
        <Logout />
      </div>
    </div>
  )
}

export default Admin
