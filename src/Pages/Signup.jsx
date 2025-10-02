import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // ✅ hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullName: name,
          username: email.split('@')[0], // simple username from email
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Signup failed')
      }

      console.log('Signup success:', data)

      // Save token
      localStorage.setItem('token', data.token)

      alert('Signup successful!')

      // ✅ Redirect to home after signup
      navigate('/')
    } catch (err) {
      console.error('Error:', err.message)
      alert(err.message)
    }
  }

  return (
    <div
      style={{
        maxWidth: 420,
        margin: '40px auto',
        padding: 24,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
      }}
    >
      <h2 style={{ marginBottom: 16 }}>Create account</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
            }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
            }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px 12px',
            background: '#111827',
            color: 'white',
            border: 0,
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Create account
        </button>
      </form>
    </div>
  )
}

export default Signup
