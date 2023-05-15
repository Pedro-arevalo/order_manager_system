import styled from 'styled-components'

export const FormButton = styled.button`
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  transition: 0.2s;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
