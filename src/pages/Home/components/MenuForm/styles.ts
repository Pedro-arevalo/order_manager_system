import styled from 'styled-components'

export const Form = styled.form`
  height: 100%;

  /* display: flex;
  flex-direction: column; */

  .form_header {
    background-color: ${(props) => props.theme['blue-700']};
    padding: 1rem;
    color: ${(props) => props.theme.white};
  }

  .form_content {
    padding: 1rem;
    /* height: 100% - (header and footer spacing) */
    height: calc(100% - 135.8px);
    overflow-y: scroll;

    section {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;

      input {
        padding: 0.6rem 0.4rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 100%;
      }

      button.delete_option {
        border: none;
        border-radius: 4px;
        background-color: ${(props) => props.theme['red-500']};
        color: ${(props) => props.theme.white};
        padding: 0 0.6rem;

        display: flex;
        align-items: center;
      }
    }

    section + section {
      margin-top: 0.4rem;
    }

    button.add_option {
      border: none;
      border-radius: 4px;
      margin-top: 1rem;
      padding: 0.4rem 0.6rem;
      background-color: ${(props) => props.theme['blue-600']};
      color: ${(props) => props.theme.white};

      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  .form_footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1rem;
    border-top: 2px solid ${(props) => props.theme['gray-100']};

    button {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};

      border: none;
      border-radius: 8px;

      display: block;
      padding: 0.4rem 0.8rem;
      margin-left: auto;
    }
  }
`
