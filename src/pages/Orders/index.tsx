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
    <MessageContainer>
      {!isThereOrderSheeps ? (
        <>
          <p>Sem pedidos registrados no momento</p>
          <AddNewOrderSheep>
            <PlusCircle size={24} />
            Adicionar novo pedido
          </AddNewOrderSheep>
        </>
      ) : (
        <OrderSheepContainer>
          <OrderSheep>
            <p>Pedido 001</p>
            <div>
              <h4>Prato 1</h4>
              <Order>
                <h3 className="menu-option">Frango grelhado</h3>
                <p className="specs">
                  Menos arroz, sem macarrão, e mais salada
                </p>
              </Order>
            </div>
          </OrderSheep>
          <OrderSheep>
            <p>Pedido 002</p>
            <div>
              <h4>Prato 1</h4>
              <Order>
                <h3 className="menu-option">Bife acebolado</h3>
                <p className="specs">Só tomate na salada</p>
              </Order>
            </div>
          </OrderSheep>
          <OrderSheep>
            <p>Pedido 003</p>
            <div>
              <h4>Prato 1</h4>
              <Order>
                <h3 className="menu-option">Assado de panela</h3>
                <p className="specs">Sem macarrão</p>
              </Order>
            </div>
            <div>
              <h4>Prato 2</h4>
              <Order>
                <h3 className="menu-option">Assado de panela</h3>
                <p className="specs">Sem macarrão</p>
              </Order>
            </div>
            <div>
              <h4>Prato 3</h4>
              <Order>
                <h3 className="menu-option">Bife acebolado</h3>
                <p className="specs">Sem macarrão</p>
              </Order>
            </div>
          </OrderSheep>
          <OrderSheep>
            <p>Pedido 004</p>
            <div>
              <h4>Prato 1</h4>
              <Order>
                <h3 className="menu-option">Escondidinho de carne</h3>
                <p className="specs">Só tomate na salada</p>
              </Order>
            </div>
          </OrderSheep>
        </OrderSheepContainer>
      )}
    </MessageContainer>
  )
}
