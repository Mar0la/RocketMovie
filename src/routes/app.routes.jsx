import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'
import {EditNote} from '../pages/EditNote'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/new' element={<New/>} />
      <Route path="/editNote/:id" element={<EditNote />} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}