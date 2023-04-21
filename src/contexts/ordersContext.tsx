import { useState, createContext, ReactNode } from 'react'

interface Order {
  plateId: string
  menuOptionName: string
  specs: string
}

interface Ordersheep {
  id: string
  orders: Order[]
  currentState: 'onHold' | 'inProgress' | 'finished'
}

interface OfferContextProviderProps {
  children: ReactNode
}

interface OrdersheepContextData {
  ordersheeps: Ordersheep[]
  setOrdersheeps: React.Dispatch<React.SetStateAction<Ordersheep[]>>
}

// delete this after testing
const defaultOrdersheeps = [
  {
    id: '001',
    currentState: 'inProgress',
    orders: [
      {
        plateId: '01',
        menuOptionName: 'Coxas e sobrecoxas de frango assadas no forno à lenha',
        specs: 'Sem arroz, sem macarrão, se tiver, com caldinho',
      },
      {
        plateId: '02',
        menuOptionName: 'Costelas de porco frito ao molho barbecue',
        specs: 'Sem muito molho, sem macarrão, sem salada, mais arroz e batata',
      },
      {
        plateId: '03',
        menuOptionName: 'Bife ao molho',
        specs: 'sem salada',
      },
    ],
  },
  {
    id: '002',
    currentState: 'inProgress',
    orders: [
      {
        plateId: '01',
        menuOptionName: 'Coxas e sobrecoxas de frango assadas no forno à lenha',
        specs: 'sem macarrão, se tiver, com caldinho',
      },
      {
        plateId: '02',
        menuOptionName: 'Costelas de porco frito ao molho barbecue',
        specs: 'Sem muito molho, sem macarrão, mais arroz',
      },
      {
        plateId: '03',
        menuOptionName: 'Cubinhos de frango ao creme de milho',
        specs: 'sem salada',
      },
    ],
  },
]

export const OrdersheepContext = createContext({} as OrdersheepContextData)

export function OrdersheepContextProvider({
  children,
}: OfferContextProviderProps) {
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
