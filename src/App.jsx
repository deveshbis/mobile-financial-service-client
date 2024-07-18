
import { useState } from 'react';
import './App.css'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import ActivateAccount from './components/ActivateAccount/ActivateAccount';
// import Login from './components/Login/Login'

function App() {
  const [token, setToken] = useState('');
  return (
    <>
      
      <div>
      {!token && <Registration />}
      {!token && <Login setToken={setToken} />}
      {token && <ActivateAccount userId="user_id_here" />}
    </div>

    </>
  )
}

export default App
