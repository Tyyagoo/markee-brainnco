import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'hooks'

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
`

function App () {
  const {
    files,
    inputTitleRef,
    textAreaRef,
    handleFileCreate,
    handleFileChange,
    handleFileUpdate,
    handleFileDelete,
  } = useFiles()

  return (
    <Layout>
      <Sidebar files={files} createFile={handleFileCreate} selectFile={handleFileChange} deleteFile={handleFileDelete} />
      <Content file={files.find(f => f.active)} onFileUpdate={handleFileUpdate} inputTitleRef={inputTitleRef} textAreaRef={textAreaRef} />
    </Layout>
  )
}

export { App }
