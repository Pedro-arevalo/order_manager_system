import { useContext } from 'react'
import { OrdersheepContext } from '../../contexts/ordersContext'

import { EditMenu, Footer, Menu } from './styles'
import { Pencil, ForkKnife } from 'phosphor-react'

export function Home() {
  const { ordersheeps } = useContext(OrdersheepContext)
  return (
    <>
      <div className="content">
        <Menu>
          <h2>Cardápio de hoje</h2>
          <ul>
            <li>
              <ForkKnife size={32} /> Bife acebolado
            </li>
            <li>
              <ForkKnife size={32} /> Assado de panela
            </li>
            <li>
              <ForkKnife size={32} /> Almôndegas
            </li>
            <li>
              <ForkKnife size={32} /> Frango ao creme de milho
            </li>
          </ul>
        </Menu>
      </div>
      <pre>{JSON.stringify(ordersheeps)}</pre>
      <div className="footer">
        <Footer>
          <EditMenu>Editar cardápio</EditMenu>
        </Footer>
      </div>
    </>
  )
}
