import { useState, createContext, ReactNode } from 'react'

interface MenuOption {
  id: string
  name: string
}

interface MenuContextData {
  menuOptions: MenuOption[]
  setMenuOptions: React.Dispatch<React.SetStateAction<MenuOption[]>>
}

interface MenuContextProviderProps {
  children: ReactNode
}

export const MenuContext = createContext({} as MenuContextData)

const defaultMenuOptions = [
  {
    id: '01',
    name: 'Bife ao molho',
  },
  {
    id: '02',
    name: 'Carne de sol',
  },
  {
    id: '03',
    name: 'Almôndegas',
  },
  {
    id: '04',
    name: 'Filé de frango à milanesa',
  },
]

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menuOptions, setMenuOptions] = useState(
    defaultMenuOptions as MenuOption[]
  )

  return (
    <MenuContext.Provider
      value={{
        menuOptions: menuOptions,
        setMenuOptions: setMenuOptions,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
