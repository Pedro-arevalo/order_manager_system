import styled from 'styled-components'
import { PageContent } from '../../layouts/DefaultLayout/styles'
import { ActionButton } from '../../styles/global'

export const Menu = styled(PageContent)`
  h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
    text-align: right;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    background-color: ${(props) => props.theme.white};
    padding: 0.8rem 1rem;
    border-radius: 8px;
    box-shadow: 1px 1px 1px;
    font-size: 1.4rem;
  }
`

export const EditMenu = styled(ActionButton)`
  margin: 2.5rem auto 0 auto;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
