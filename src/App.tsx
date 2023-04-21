// router
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

// theme
import { ThemeProvider } from 'styled-components'
import { globalTheme } from './styles/themes/globalTheme'

import { OrdersheepContextProvider } from './contexts/ordersContext'

import { GlobalStyle } from './styles/global'

interface MenuOption {
  id: string
  name: string
}

interface Order {
  toTake: boolean
  menuOption: MenuOption
  specs: string
}

interface OrderSheet {
  id: string
  time: Date
  orders: Order[]
  generalSpec: string
}

export function App() {
  // const menu: MenuOption[] = [
  //   {
  //     id: 'b0',
  //     name: 'Bife acebolado',
  //   },
  //   {
  //     id: 'c1',
  //     name: 'Assado de panela',
  //   },
  //   {
  //     id: 'c2',
  //     name: 'Strogonoff de carne',
  //   },
  //   {
  //     id: 'p3',
  //     name: 'Frango grelhado',
  //   },
  // ]

  // const myOrder: OrderSheet = {
  //   id: 'hegergieq',
  //   time: new Date(),
  //   orders: [
  //     {
  //       toTake: true,
  //       menuOption: {
  //         id: 'b0',
  //         name: 'Bife acebolado',
  //       },
  //       specs: 'sin cebolla',
  //     },
  //   ],
  //   generalSpec: 'Está con prisa',
  // }
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={globalTheme}>
          <OrdersheepContextProvider>
            <Router />
            <GlobalStyle />
          </OrdersheepContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
