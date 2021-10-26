import styled, { css, keyframes } from 'styled-components'

export const ListItem = styled.li<{$active: boolean}>`${({ theme, $active }) => css`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;

  background-color: ${$active ? theme.colors.black : 'transparent'};

  &:hover {
    background-color: ${theme.colors.black};
  }
`}`

export const Anchor = styled.a`${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
    padding-left: 10px;
`}`

export const IconContainer = styled.div`
  padding-right: 5px;
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
`

export const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const RotateAnimation = styled.div`
  animation: ${rotation} 1s infinite linear;
`
