import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import { Productform } from './Component/Productform'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Productform" element={<Productform/>} />
    </Routes>
    </>
  )
}

export default App