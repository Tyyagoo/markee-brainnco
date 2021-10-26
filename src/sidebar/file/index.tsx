import * as S from './styles'
import * as I from 'ui/icons'
import { File } from '../types'

type FileProps = {
  selectFile: (id: string) => void
} & Omit<File, 'content'>;

export function FileItem ({
  id, name, active, status, selectFile,
}: FileProps) {
  return (
    <S.ListItem
      key={id} $active={active} onClick={(ev) => {
        ev.preventDefault()
        selectFile(id)
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <I.File color={active ? '#1FC8E1' : '#FAFAFA'} />
        <S.Anchor href={`/file/${id}`}>{name}</S.Anchor>
      </div>
      <S.IconContainer>
        {active && <I.Ellipse width='8px' height='9px' />}
        {(!active && status === 'saving') && <S.RotateAnimation><I.Loading width='10px' height='10px' /></S.RotateAnimation>}
        {(!active && status === 'saved') && <I.Check width='10px' height='10px' />}
        {(!active && status === 'editing') && <I.Close width='10px' height='10px' />}
      </S.IconContainer>
    </S.ListItem>
  )
}
