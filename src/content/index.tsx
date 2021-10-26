import * as S from './styles'
import * as I from 'ui/icons'
import marked from 'marked'
import DOMpurify from 'dompurify'
import { ChangeEvent, useState } from 'react'

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

export function Content () {
  const [content, setContent] = useState('')

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Layout>
      <S.Header>
        <I.File color='#1FC8E1' />
        <S.Input value='CONTRIBUT' autoFocus />
      </S.Header>

      <S.TextArea placeholder='Type your markdown here!' value={content} onChange={handleContentChange} />
      <S.OutputContainer dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(marked(content)) }} />
    </S.Layout>
  )
}
