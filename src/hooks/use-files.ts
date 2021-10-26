import { useEffect, useRef, useState } from 'react'
import { File } from 'resources/types'
import { v4 as uuid } from 'uuid'

export function useFiles () {
  const [files, setFiles] = useState<File[]>([])

  const inputTitleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onUpdate () {
      const selected = files.find(f => f.active)
      if (selected && selected.status === 'editing') {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setFiles(fs => fs.map(f => f.active ? { ...f, status: 'saving' } : { ...f, status: 'saved' }))

          clearTimeout(timeoutRef.current!)
          timeoutRef.current = setTimeout(() => {
            setFiles(fs => fs.map(f => f.active ? { ...f, status: 'saved' } : f))
          }, 300)
        }, 300)
      }
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
    setFiles(fs => fs.map(f => ({ ...f, active: f.id === id, status: f.id === id ? 'editing' : f.status })))
    inputTitleRef.current?.focus()
  }

  const handleFileUpdate = () => {
    setFiles(fs => fs.map(f => f.active
      ? { ...f, name: inputTitleRef.current?.value ?? f.name, content: textAreaRef.current?.value ?? f.content, status: 'editing' }
      : f))
  }

  const handleFileDelete = (id: string) => {
    setFiles(fs => fs.filter(f => f.id !== id))
  }

  return {
    files,
    inputTitleRef,
    textAreaRef,
    handleFileCreate,
    handleFileChange,
    handleFileUpdate,
    handleFileDelete,
  }
}
