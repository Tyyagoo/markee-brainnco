import * as S from './styles'
import * as I from 'ui/icons'
import { File } from '../sidebar/types'
import marked from 'marked'
import DOMpurify from 'dompurify'
import { ChangeEvent, useState, RefObject, useEffect } from 'react'

import('highlight.js').then(m => {
  const hljs = m.default

  marked.options({
    highlight: (code, language) => {
      if (language && hljs.getLanguage(language)) {
        return hljs.highlight(code, { language }).value
      }
      return hljs.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  file?: File,
  onFileUpdate: () => void,
  inputTitleRef: RefObject<HTMLInputElement>,
  textAreaRef: RefObject<HTMLTextAreaElement>,
}

export function Content ({ file, onFileUpdate, inputTitleRef, textAreaRef }: ContentProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    setTitle(file?.name ?? '')
    setContent(file?.content ?? '')
  }, [file?.name, file?.content])

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (file) {
      file.name = e.target.value
      setTitle(e.target.value)
      onFileUpdate()
    }
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (file) {
      file.content = e.target.value
      setContent(e.target.value)
      onFileUpdate()
    }
  }

  return (
    <S.Layout>
      <S.Header>
        <I.File color='#1FC8E1' />
        <S.Input value={title} onChange={handleTitleChange} ref={inputTitleRef} disabled={!file} />
      </S.Header>

      <S.TextArea placeholder={!file ? 'Crie um arquivo antes de começar a editar..' : 'Edite seu markdown aqui!'} value={content} onChange={handleContentChange} ref={textAreaRef} disabled={!file} />
      <S.OutputContainer dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(marked(content)) }} />
    </S.Layout>
  )
}
