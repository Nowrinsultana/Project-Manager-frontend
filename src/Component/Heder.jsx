import { Link } from 'react-router-dom'

const Heder = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 16,
          listStyle: 'none',
          padding: 12,
          margin: 0,
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#111827',
              fontWeight: 'bold',
            }}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Heder
