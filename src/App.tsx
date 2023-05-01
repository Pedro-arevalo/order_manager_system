// router
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

// theme
import { ThemeProvider } from 'styled-components'
import { globalTheme } from './styles/themes/globalTheme'

//contexts
import { MenuContextProvider } from './contexts/menuContext'
import { OrdersheepContextProvider } from './contexts/ordersheepsContext'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={globalTheme}>
          <MenuContextProvider>
            <OrdersheepContextProvider>
              <Router />
              <GlobalStyle />
            </OrdersheepContextProvider>
          </MenuContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
