import * as S from './styles'
import * as I from 'ui/icons'
import { File } from './types'
import { FileItem } from './file'

type SidebarProps = {
  files: File[]
  createFile: () => void
  selectFile: (id: string) => void
}

export function Sidebar ({ files, createFile, selectFile }: SidebarProps) {
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

      <S.PrimaryButton onClick={createFile}>
        <I.Plus width='9px' height='9px' />Adicionar arquivo
      </S.PrimaryButton>

      <S.List>
        {files.map(file => (
          <FileItem
            key={file.id} id={file.id} name={file.name} active={file.active} status={file.status} selectFile={selectFile}
          />
        ),
        )}
      </S.List>
    </S.Aside>
  )
}
