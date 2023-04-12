import styled from 'styled-components'
import { PageContent } from '../../layouts/DefaultLayout/styles'
import { ActionButton } from '../../styles/global'

export const MessageContainer = styled(PageContent)`
  p {
    margin-bottom: 1rem;
  }
`

export const AddNewOrderSheep = styled(ActionButton)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

// in case there is at least one OrderSheep

export const OrderSheepContainer = styled.div`
  align-self: flex-start;
  margin-bottom: auto;
  width: 100%;

  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;

  /* bOrderSheep: 1px solid black; */
`

export const OrderSheep = styled.section`
  padding: 1rem;
  min-width: 180px;
  max-width: 240px;

  background-color: ${(props) => props.theme.white};
  box-shadow: 2px 2px 2px;
  border-radius: 8px;
`

export const Order = styled.div`
  color: 'red';
`
