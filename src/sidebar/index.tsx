import * as S from './styles'
import * as I from 'ui/icons'
import { File } from './types'

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

  function getStatusIcon (file: File) {
    const { status: fileStatus } = file

    if (file.active) {
      return <I.SelectedIcon width='8px' height='9px' />
    } else {
      switch (fileStatus) {
        case 'saving':
          return <S.RotateAnimation><I.SavingIcon width='10px' height='10px' /></S.RotateAnimation>
        case 'saved':
          return <I.SavedIcon width='10px' height='10px' />
        default:
          return <I.CloseIcon width='10px' height='10px' />
      }
    }
  }

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
        <I.PlusIcon width='9px' height='9px' />Adicionar arquivo
      </S.PrimaryButton>

      <S.List>
        {files.map(file => {
          return (
            <S.ListItem key={file.id} $active={file.active} onFocus={() => console.log(`focus on: ${file.id}`)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <I.FileIcon color={file.active ? '#1FC8E1' : '#FAFAFA'} />
                <S.Anchor href='/'>{file.name}</S.Anchor>
              </div>
              <S.IconContainer>{getStatusIcon(file)}</S.IconContainer>
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Aside>
  )
}

export { Sidebar }
