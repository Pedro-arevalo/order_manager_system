import { PlusCircle } from 'phosphor-react'
import {
  AddNewOrderSheep,
  MessageContainer,
  OrderSheepContainer,
  OrderSheep,
  Order,
} from './styles'

export function Orders() {
  const isThereOrderSheeps = true

  return (
    <>
      {!isThereOrderSheeps ? (
        <MessageContainer>
          <p>Sem pedidos registrados no momento</p>
          <AddNewOrderSheep>
            <PlusCircle size={24} />
            Adicionar novo pedido
          </AddNewOrderSheep>
        </MessageContainer>
      ) : (
        <OrderSheepContainer>
          <OrderSheep>
            <p className="enum_ordersheep">Pedido 001</p>
            <Order>
              <h4 className="enum_order">Prato 1</h4>
              <div>
                <h3 className="enum_order">Frango grelhado</h3>
                <p className="specs">
                  Menos arroz, sem macarrão, e mais salada
                </p>
              </div>
            </Order>
          </OrderSheep>
          <OrderSheep>
            <p className="enum_ordersheep">Pedido 002</p>
            <Order>
              <h4 className="enum_order">Prato 1</h4>
              <div>
                <h3 className="enum_order">Bife acebolado</h3>
                <p className="specs">Só tomate na salada</p>
              </div>
            </Order>
            <Order>
              <h4 className="enum_order">Prato 2</h4>
              <div>
                <h3 className="enum_order">Ovo frito</h3>
                <p className="specs">Sem feijão</p>
              </div>
            </Order>
          </OrderSheep>
          <OrderSheep>
            <p className="enum_ordersheep">Pedido 003</p>
            <Order>
              <h4 className="enum_order">Prato 1</h4>
              <div>
                <h3 className="enum_order">Assado de panela</h3>
                <p className="specs">Sem macarrão</p>
              </div>
            </Order>
            <Order>
              <h4 className="enum_order">Prato 2</h4>
              <div>
                <h3 className="enum_order">Assado de panela</h3>
                <p className="specs">Sem macarrão</p>
              </div>
            </Order>
            <Order>
              <h4 className="enum_order">Prato 3</h4>
              <div>
                <h3 className="enum_order">Bife acebolado</h3>
                <p className="specs">Sem macarrão</p>
              </div>
            </Order>
          </OrderSheep>
          <OrderSheep>
            <p className="enum_ordersheep">Pedido 004</p>
            <Order>
              <h4 className="enum_order">Prato 1</h4>
              <div>
                <h3 className="menu_option">Escondidinho de carne</h3>
                <p className="specs">Só tomate na salada</p>
              </div>
            </Order>
          </OrderSheep>
        </OrderSheepContainer>
      )}
    </>
  )
}
