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
  const isThereOrderSheeps = true

  return (
    <>
      {!isThereOrderSheeps ? (
        <MessageContainer>
          <p>Sem pedidos registrados no momento</p>
          <CreateNewOrderSheep>
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
                <Order>
                  <h4 className="enum_order">Prato 4</h4>
                  <div>
                    <h3 className="enum_order">Assado de panela</h3>
                    <p className="specs">Sem macarrão</p>
                  </div>
                </Order>
                <Order>
                  <h4 className="enum_order">Prato 5</h4>
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
              <OrderSheep>
                <p className="enum_ordersheep">Pedido 005</p>
                <Order>
                  <h4 className="enum_order">Prato 1</h4>
                  <div>
                    <h3 className="menu_option">
                      Costela de porco frito ao molho barbecue
                    </h3>
                    <p className="specs">
                      Sem arroz, sem macarrão, mais salada, porém sem cebola
                    </p>
                  </div>
                </Order>
                <Order>
                  <h4 className="enum_order">Prato 2</h4>
                  <div>
                    <h3 className="menu_option">
                      Coxas e sobrecoxas de frango assadas no forno à lenha
                    </h3>
                    <p className="specs">Sem macarrão</p>
                  </div>
                </Order>
              </OrderSheep>
            </OrderSheepContainer>
          </div>
          <div className="footer">
            <Footer>
              <CreateNewOrderSheep>
                <PlusCircle size={24} />
                Criar nova comanda
              </CreateNewOrderSheep>
            </Footer>
          </div>
        </>
      )}
    </>
  )
}
