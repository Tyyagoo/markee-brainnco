import styled, { css } from 'styled-components/macro'

const Title = styled.h1`${({ theme }) => css`
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
`}`

function App () {
  return <div><Title>Hello</Title></div>
}

export { App }
