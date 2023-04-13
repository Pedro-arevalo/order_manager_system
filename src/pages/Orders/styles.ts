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
  border: 1px solid blue;
  padding: 1rem;
  width: 100%;

  display: flex;
  gap: 1rem;
`

export const OrderSheep = styled.section`
  padding: 1rem;
  min-width: 180px;
  max-width: 240px;

  background-color: ${(props) => props.theme.white};
  box-shadow: 2px 2px 2px;
  border-radius: 8px;

  p.enum_ordersheep {
    color: ${(props) => props.theme['gray-500']};
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: ${(props) => props.theme['yellow-500']};
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`

export const Order = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:first-of-type {
    padding-top: 1rem;
  }

  & + & {
    border-top: 1px dashed ${(props) => props.theme['gray-500']};
  }

  h4.enum_order {
    margin-bottom: 0.5rem;
  }
`
