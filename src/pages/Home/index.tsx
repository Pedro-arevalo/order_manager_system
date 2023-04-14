import { EditMenu, Menu } from './styles'
import { Pencil, ForkKnife } from 'phosphor-react'

export function Home() {
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
      <div className="footer">
        <EditMenu>
          <Pencil size={24} />
          Editar cardápio
        </EditMenu>
      </div>
    </>
  )
}
