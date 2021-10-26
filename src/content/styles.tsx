import styled from 'styled-components/macro'

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 1fr;
`

export const Header = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding-left: 15px;
`

export const Input = styled.input`
    background: transparent;
    border: none;
    padding: 0px 10px;
    font-size: 1.5rem;
`

export const TextArea = styled.textarea`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    border: none;
    padding: 15px;
    font-size: 1.3rem;
`

export const OutputContainer = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-left: 1px solid grey;
    padding: 15px;
`
