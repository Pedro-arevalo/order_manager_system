import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { NewOrder } from './pages/NewOrder'
import { Orders } from './pages/Orders'
import { Sells } from './pages/Sells'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="orders">
          <Route path="" element={<Orders />} />
          <Route path="new" element={<NewOrder />} />
        </Route>
        <Route path="sells" element={<Sells />} />
      </Route>
    </Routes>
  )
}
