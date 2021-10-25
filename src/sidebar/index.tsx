import * as S from './styles'
import { File } from './types'

function Sidebar () {
  const files: File[] = [
    {
      id: 'readme',
      name: 'README.md',
      content: '',
      active: false,
      status: 'editing',
    },
    {
      id: 'contributing',
      name: 'CONTRIBUTING.md',
      content: '',
      active: false,
      status: 'editing',
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
        <S.Image src='logo192.png' alt='logo' />
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
        <S.Span>+</S.Span> Adicionar arquivo
      </S.PrimaryButton>

      <S.List>
        {files.map(file => {
          return (
            <S.ListItem key={file.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <S.FileIcon src='file.svg' alt='file icon' />
                <S.Anchor href='/'>{file.name}</S.Anchor>
              </div>
              <S.CloseButton>x</S.CloseButton>
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Aside>
  )
}

export { Sidebar }
