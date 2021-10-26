import styled from 'styled-components/macro'
import { useEffect, useRef, useState } from 'react'
import { Sidebar } from 'sidebar'
import { File } from 'sidebar/types'
import { Content } from 'content'
import { v4 as uuid } from 'uuid'

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
`

function App () {
  const [files, setFiles] = useState<File[]>([])

  const inputTitleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onUpdate () {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setFiles(fs => fs.map(f => f.active ? { ...f, status: 'saving' } : { ...f, status: 'saved' }))
      }, 300)
    }

    onUpdate()
  }, [files])

  const handleFileCreate = () => {
    const file: File = {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    inputTitleRef.current?.focus()
    setFiles(fs => [...fs.map(f => ({ ...f, active: false })), file])
  }

  const handleFileChange = (id: string) => {
    setFiles(fs => fs.map(f => ({ ...f, active: f.id === id })))
    inputTitleRef.current?.focus()
  }

  const handleFileUpdate = () => {
    setFiles(fs => fs.map(f => f.active
      ? { ...f, name: inputTitleRef.current?.value ?? f.name, content: textAreaRef.current?.value ?? f.content, status: 'editing' }
      : f))
  }

  return (
    <Layout>
      <Sidebar files={files} createFile={handleFileCreate} selectFile={handleFileChange} />
      <Content file={files.find(f => f.active)} onFileUpdate={handleFileUpdate} inputTitleRef={inputTitleRef} textAreaRef={textAreaRef} />
    </Layout>
  )
}

export { App }
