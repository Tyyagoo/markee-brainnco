import * as S from './styles'
import * as I from 'ui/icons'
import { File } from './types'
import { FileItem } from './file'

function Sidebar () {
  const files: File[] = [
    {
      id: 'readme',
      name: 'README.md',
      content: '',
      active: false,
      status: 'saving',
    },
    {
      id: 'contributing',
      name: 'CONTRIBUTING.md',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: 'license',
      name: 'LICENSE.md',
      content: '',
      active: false,
      status: 'editing',
    },
    {
      id: 'links',
      name: 'Links.md',
      content: '',
      active: false,
      status: 'editing',
    },
    {
      id: 'roadmap',
      name: 'roadmap.md',
      content: '',
      active: true,
      status: 'editing',
    },
  ]

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

      <S.PrimaryButton>
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
