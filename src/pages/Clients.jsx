import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore'

function Clients() {
 

  const [form, setForm] = useState({ nom: '', email: '', tel: '' })
  const [clients, setClients] = useState([])

  useEffect(() => {
    // Écoute en temps réel
    const unsubscribe = onSnapshot(collection(db, 'clients'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setClients(data)
    })
    return () => unsubscribe()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'clients'), form)
      setForm({ nom: '', email: '', tel: '' }) // reset form
    } catch (err) {
      console.error('Erreur ajout client :', err)
    }
  }

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl mb-4">Ajouter un client</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          placeholder="Nom"
          className="p-2 rounded text-black"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 rounded text-black"
        />
        <input
          type="tel"
          name="tel"
          value={form.tel}
          onChange={handleChange}
          placeholder="Téléphone"
          className="p-2 rounded text-black"
        />
        <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          Ajouter
        </button>
      </form>

      <h2 className="text-xl mb-2">Liste des clients :</h2>
      <ul className="space-y-2">
        {clients.map((client) => (
          <li key={client.id} className="border p-2 rounded bg-gray-800">
            <strong>{client.nom}</strong> – {client.email} – {client.tel}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
