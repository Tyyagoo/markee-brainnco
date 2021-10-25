import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
`

function App () {
  return <Layout><Sidebar /></Layout>
}

export { App }
