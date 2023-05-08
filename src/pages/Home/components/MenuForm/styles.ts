import styled from 'styled-components'

export const Form = styled.form`
  height: 100%;

  & *:focus {
    outline: 0;
  }

  /* display: flex;
  flex-direction: column; */
  button {
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 4px;
    padding: 0.4rem 0.6rem;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

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

    div.options_logged {
      section {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 0.5rem;

        input {
          padding: 0.6rem 0.4rem;
          border: 1px solid ${(props) => props.theme['gray-300']};
          border-radius: 4px;
          width: 100%;

          color: ${(props) => props.theme['gray-500']};
        }

        input:focus {
          color: ${(props) => props.theme['gray-600']};
        }

        button.delete_option {
          background-color: ${(props) => props.theme['red-500']};
          padding: 0 0.6rem;
        }
        button.delete_option:hover,
        button.delete_option:focus {
          background-color: ${(props) => props.theme['red-700']};
        }
      }

      section + section {
        margin-top: 0.4rem;
      }

      div.button_group {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        margin-top: 1rem;

        button.add_option {
          background-color: ${(props) => props.theme['blue-600']};
          gap: 0.4rem;
        }
        button.add_option:hover:not(:disabled),
        button.add_option:focus {
          background-color: ${(props) => props.theme['blue-700']};
        }

        button.dismiss_menu {
          background-color: ${(props) => props.theme['red-500']};
        }
      }
    }

    div.no_options_logged {
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;

      p {
        color: ${(props) => props.theme['gray-500']};
        font-weight: bolder;
        font-size: 1.2rem;
      }

      div {
        display: flex;
        align-items: stretch;
        gap: 0.5rem;
      }

      button.add_option {
        background-color: ${(props) => props.theme['blue-600']};
        gap: 0.4rem;
      }

      button.submit_without_options {
        background-color: ${(props) => props.theme['red-500']};
      }
    }
  }

  .form_footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1rem;
    border-top: 2px solid ${(props) => props.theme['gray-100']};

    display: flex;
    justify-content: space-between;

    button.cancel {
      background-color: ${(props) => props.theme['red-700']};
    }
    button.save {
      background-color: ${(props) => props.theme['green-500']};
    }
  }
`
