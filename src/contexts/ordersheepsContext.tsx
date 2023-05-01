import { useState, createContext, ReactNode } from 'react'

interface MenuOption {
  id: string
  name: string
}

interface Order {
  id: string
  menuOptionName: MenuOption['name']
  specs: string
}

interface Ordersheep {
  id: string
  toTake: boolean
  orders: Order[]
  currentState: 'onHold' | 'inProgress' | 'finished'
}

interface OrdersheepContextProviderProps {
  children: ReactNode
}

interface OrdersheepContextData {
  ordersheeps: Ordersheep[]
  setOrdersheeps: React.Dispatch<React.SetStateAction<Ordersheep[]>>
}

// delete this after testing
const defaultOrdersheeps: Ordersheep[] = [
  {
    id: '001',
    toTake: false,
    currentState: 'inProgress',
    orders: [
      {
        id: '01',
        menuOptionName: 'Coxas e sobrecoxas de frango assadas no forno à lenha',
        specs: 'Sem arroz, sem macarrão, se tiver, com caldinho',
      },
      {
        id: '02',
        menuOptionName: 'Costelas de porco frito ao molho barbecue',
        specs: 'Sem muito molho, sem macarrão, sem salada, mais arroz e batata',
      },
      {
        id: '03',
        menuOptionName: 'Bife ao molho',
        specs: 'sem salada',
      },
    ],
  },
  {
    id: '002',
    toTake: true,
    currentState: 'inProgress',
    orders: [
      {
        id: '01',
        menuOptionName: 'Assado de panela',
        specs: 'sem macarrão, se tiver, com caldinho',
      },
      {
        id: '02',
        menuOptionName: 'Costelas de porco frito ao molho barbecue',
        specs: 'Sem muito molho, sem macarrão, mais arroz',
      },
      {
        id: '03',
        menuOptionName: 'Cubinhos de frango ao creme de milho',
        specs: 'sem salada',
      },
    ],
  },
]

export const OrdersheepContext = createContext({} as OrdersheepContextData)

export function OrdersheepContextProvider({
  children,
}: OrdersheepContextProviderProps) {
  const [ordersheeps, setOrdersheeps] = useState(
    defaultOrdersheeps as Ordersheep[]
  )

  return (
    <OrdersheepContext.Provider
      value={{
        ordersheeps: ordersheeps,
        setOrdersheeps: setOrdersheeps,
      }}
    >
      {children}
    </OrdersheepContext.Provider>
  )
}
