import styled, { css } from 'styled-components'

export const Aside = styled.aside`${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightBlack};
    padding: 20px;
`}`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 40px;
`

export const BoldSpan = styled.span`
  font-size: 3rem;
  font-weight: 700;
`

export const BoldWhiteSpan = styled(BoldSpan)`${({ theme }) => css`
    color: ${theme.colors.white}
`}`

export const BoldPrimarySpan = styled(BoldSpan)`${({ theme }) => css`
    color: ${theme.colors.primary}
`}`

export const Divider = styled.div`
  display: grid;
  padding-top: 40px;
  grid-template-columns: 0.2fr 0.4fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 5px;
`

export const Line = styled.div`${({ theme }) => css`
  width: 100%;
  height: 0px;
  border: 1px solid ${theme.colors.primary};
`}`

export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`

export const WhiteSpan = styled(Span)`${({ theme }) => css`
    color: ${theme.colors.white};
`}`

export const DefaultButton = styled.button`
  border: 0px;
  font-size: 1rem;
  font-weight: 400;
`

export const PrimaryButton = styled(DefaultButton)`${({ theme }) => css`
    height: 3rem;
    width: 100%;
    border-radius: 5px;
    margin: 20px 0px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};

    &: hover {
      
    }
`}`

export const List = styled.ul`
    list-style-type: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`
