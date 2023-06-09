import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
export const SideMenu = styled.aside`
  background-color: ${(props) => props.theme.white};
  width: 15%;
  min-width: 10rem;
  max-width: 18rem;

  a {
    padding: 1.2rem 2rem;
    display: block;

    color: ${(props) => props.theme['gray-500']};
    text-decoration: none;
    list-style: none;

    border-bottom: 1px solid ${(props) => props.theme['gray-100']};

    transition: 0.2s;
  }
  a:first-of-type {
    border-top: 1px solid ${(props) => props.theme['gray-100']};
  }

  a:focus {
    box-shadow: none;
  }

  a:hover {
    background-color: ${(props) => props.theme['gray-100']};
  }
  a.active {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme.white};
  }
`
export const MainContentSide = styled.main`
  width: 85%;
  min-width: calc(100% - 10rem);
  max-width: calc(100% - 18rem);
  padding: 2rem;

  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.section`
  margin-top: 2.5rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  height: fit-content;
  overflow: hidden;
  flex-grow: 1;

  background-color: ${(props) => props.theme['gray-100']};

  .content {
    flex-grow: 1;
    overflow: scroll;
    max-height: 100%;
  }

  .footer {
    border-top: 1px solid ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme.white};
    padding: 1.2rem 1rem;
  }
`

let pageVerticalMargin = 4

export const PageContent = styled.div`
  margin: ${pageVerticalMargin / 2}rem 1rem;
  min-height: calc(100% - ${pageVerticalMargin}rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 2px;
`
