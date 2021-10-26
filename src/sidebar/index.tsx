import * as S from './styles'
import * as I from 'ui/icons'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { File } from './types'
import { FileItem } from './file'

function Sidebar () {
  const [files, setFiles] = useState<File[]>([])

  function handleFileCreate () {
    const file: File = {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    setFiles(fs => [...fs.map(f => ({ ...f, active: false })), file])
  }

  return (
    <S.Aside>
      <S.Header>
        <S.Image src='/logo192.png' alt='logo' />
        <div>
          <S.BoldWhiteSpan>markee</S.BoldWhiteSpan>
          <S.BoldPrimarySpan>.</S.BoldPrimarySpan>
        </div>
      </S.Header>

      <S.Divider>
        <S.Line />
        <S.WhiteSpan>Arquivos</S.WhiteSpan>
        <S.Line />
      </S.Divider>

      <S.PrimaryButton onClick={handleFileCreate}>
        <I.Plus width='9px' height='9px' />Adicionar arquivo
      </S.PrimaryButton>

      <S.List>
        {files.map(file => (
          <FileItem key={file.id} id={file.id} name={file.name} active={file.active} status={file.status} />
        ),
        )}
      </S.List>
    </S.Aside>
  )
}

export { Sidebar }
