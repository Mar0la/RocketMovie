import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { Signin } from '../pages/Signin'



export function AuthRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Signin/>} />
      <Route path='/register' element={<SignUp/>} />
    </Routes>
  )
}