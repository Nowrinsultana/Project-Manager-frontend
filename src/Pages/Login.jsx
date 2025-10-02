import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')
      localStorage.setItem('token', data.token)
      alert('Login successful!')
      navigate('/') // 👈 redirects to home page

      localStorage.setItem('token', data.token)
      alert('Login successful!')
    } catch (err) {
      alert(err.message)
    }
  }

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:3000/api/googleLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: credentialResponse.credential }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Google login failed')
      localStorage.setItem('token', data.token)
      alert('Login successful!')
      navigate('/') // 👈 redirects to home page

      localStorage.setItem('token', data.token)
      alert('Google login successful!')
    } catch (err) {
      alert(err.message)
    }
  }

  const handleGoogleFailure = () => {
    alert('Google login failed. Please try again.')
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
      <h2 style={{ marginBottom: 16 }}>Login</h2>
      <form onSubmit={handleSubmit}>
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
          Sign in
        </button>
      </form>

      <div style={{ margin: '20px 0', textAlign: 'center' }}>or</div>

      {/* Google Login Button */}
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
        width="100%"
      />
    </div>
  )
}

export default Login
