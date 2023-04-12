import { Outlet, NavLink } from 'react-router-dom'
import {
  HeaderTitle,
  LayoutContainer,
  MainContentSide,
  PageContainer,
  SideMenu,
} from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <SideMenu>
        <nav>
          <NavLink to="/" title="Ir à página principal">
            Inicio
          </NavLink>

          <NavLink to="/orders" title="Ver pedidos">
            Pedidos
          </NavLink>

          <NavLink to="/sells" title="Ver vendas">
            Vendas
          </NavLink>
        </nav>
      </SideMenu>
      <MainContentSide>
        <header>
          <HeaderTitle>Gerenciador de Pedidos 1.0</HeaderTitle>
        </header>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </MainContentSide>
    </LayoutContainer>
  )
}
