import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-600']};
    -webkit-font-smoothing: antialiased;

    .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
      opacity: 1;
    }

    .ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: none;

  transition: 0.2s;
`
