import { useEffect, useContext } from 'react'

import { OrdersheepContext } from '../../contexts/ordersContext'

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
    console.log('hello')
  }, [ordersheeps])

  function changeOrdersheep() {
    setOrdersheeps((state) => {
      const newOrdersheep = state
      newOrdersheep.push({
        id: '0001',
        orders: [
          {
            plateId: '01',
            menuOptionName: 'Assado de panela',
            specs: 'sem arroz',
          },
        ],
        currentState: 'onHold',
      })
      console.log(newOrdersheep)
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
              <OrderSheep>
                <p className="enum_ordersheep">Pedido 001</p>
                <Order>
                  <h4 className="enum_order">Prato 01</h4>
                  <div>
                    <h3 className="menu_option">
                      Coxas e sobrecoxas de frango assadas no forno à lenha
                    </h3>
                    <p className="specs">
                      Sem macarrão, menos arroz, só tomate na salada
                    </p>
                  </div>
                </Order>
                <Order>
                  <h4 className="enum_order">Prato 01</h4>
                  <div>
                    <h3 className="menu_option">
                      Coxas e sobrecoxas de frango assadas no forno à lenha
                    </h3>
                    <p className="specs">
                      Sem macarrão, menos arroz, só tomate na salada
                    </p>
                  </div>
                </Order>
                <Order>
                  <h4 className="enum_order">Prato 01</h4>
                  <div>
                    <h3 className="menu_option">
                      Coxas e sobrecoxas de frango assadas no forno à lenha
                    </h3>
                    <p className="specs">
                      Sem macarrão, menos arroz, só tomate na salada
                    </p>
                  </div>
                </Order>
              </OrderSheep>
              {/* <pre>{JSON.stringify(ordersheeps)}</pre> */}
              {ordersheeps.map((ordersheep) => (
                <OrderSheep>
                  <p className="enum_ordersheep">Pedido {ordersheep.id}</p>
                  {ordersheep.orders.map((order) => (
                    <Order>
                      <h4 className="enum_order">Prato {order.plateId}</h4>
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
                Criar nova comanda
              </CreateNewOrderSheep>
            </Footer>
          </div>
        </>
      )}
    </>
  )
}
