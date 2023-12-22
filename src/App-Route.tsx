import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
import Login from './pages/Login'

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default AppRoute
