import { useState, useContext } from 'react'

import { EditMenu, Footer, Menu } from './styles'
import { ForkKnife } from 'phosphor-react'
import { MenuContext } from '../../contexts/menuContext'
import { ModalToSetMenu } from './components/ModalToSetMenu'

export function Home() {
  const { menuOptions, setMenuOptions } = useContext(MenuContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const isMenuEmpty = !menuOptions.length

  console.log(isMenuEmpty)

  return (
    <>
      {isMenuEmpty ? (
        <div>
          <h1>Empty</h1>
          <button onClick={() => setModalIsOpen(true)}>Open modal</button>
        </div>
      ) : (
        <>
          <div className="content">
            <Menu>
              <h2>Cardápio de hoje</h2>
              <ul>
                {menuOptions.map((option) => (
                  <li key={option.id}>
                    <ForkKnife size={32} /> {option.name}
                  </li>
                ))}
              </ul>
            </Menu>
          </div>
          <div className="footer">
            <Footer>
              <EditMenu
                onClick={() => {
                  setModalIsOpen(true)
                }}
              >
                Editar cardápio
              </EditMenu>
            </Footer>
          </div>
        </>
      )}
      <ModalToSetMenu
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        isMenuEmpty={isMenuEmpty}
      />
    </>
  )
}
