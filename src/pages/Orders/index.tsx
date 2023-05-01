import { useEffect, useContext, useState } from 'react'

import { OrdersheepContext } from '../../contexts/ordersheepsContext'

import { PlusCircle } from 'phosphor-react'
import {
  CreateNewOrderSheep,
  MessageContainer,
  OrderSheepContainer,
  OrderSheep,
  Order,
  Footer,
} from './styles'

export function Orders() {
  const { ordersheeps, setOrdersheeps } = useContext(OrdersheepContext)
  const isThereOrderSheeps = ordersheeps.length > 0

  useEffect(() => {
    console.log()
  }, [])

  function changeOrdersheep() {
    setOrdersheeps((state) => {
      /*
        for some reason, without the slice() method,
        React can't notice there's a change in the
        state, so it doesn't rerenders, as it should
      */
      const newOrdersheep = state.slice()
      newOrdersheep.push({
        id: '0001',
        toTake: false,
        orders: [
          {
            id: '01',
            menuOptionName: 'Assado de panela',
            specs: 'sem arroz',
          },
        ],
        currentState: 'onHold',
      })
      return newOrdersheep
    })
  }

  return (
    <>
      {!isThereOrderSheeps ? (
        <MessageContainer>
          <p>Sem pedidos registrados no momento</p>
          <CreateNewOrderSheep onClick={changeOrdersheep}>
            <PlusCircle size={24} />
            Criar nova comanda
          </CreateNewOrderSheep>
        </MessageContainer>
      ) : (
        <>
          <div className="content">
            <OrderSheepContainer>
              {/* <pre>{JSON.stringify(ordersheeps)}</pre> */}
              {ordersheeps.map((ordersheep) => (
                <OrderSheep key={ordersheep.id}>
                  <p className="enum_ordersheep">Pedido {ordersheep.id}</p>
                  {ordersheep.orders.map((order) => (
                    <Order key={order.id}>
                      <h4 className="enum_order">Prato {order.id}</h4>
                      <div>
                        <h3 className="menu_option">{order.menuOptionName}</h3>
                        <p className="specs">{order.specs}</p>
                      </div>
                    </Order>
                  ))}
                </OrderSheep>
              ))}
            </OrderSheepContainer>
          </div>
          <div className="footer">
            <Footer>
              <CreateNewOrderSheep onClick={changeOrdersheep}>
                Criar novo pedido
              </CreateNewOrderSheep>
            </Footer>
          </div>
        </>
      )}
    </>
  )
}
