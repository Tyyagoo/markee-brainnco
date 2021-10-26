import * as S from './styles'
import * as I from 'ui/icons'
import { File } from 'resources/types'
import { StatusIcon } from './status-icon'

type FileProps = {
  selectFile: (id: string) => void
  deleteFile: (id: string) => void
} & Omit<File, 'content'>;

export function FileItem ({
  id, name, active, status, selectFile, deleteFile,
}: FileProps) {
  return (
    <S.ListItem key={id} $active={active}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <I.File color={active ? '#1FC8E1' : '#FAFAFA'} />
        <S.Anchor
          href={`/file/${id}`} onClick={(ev) => {
            ev.preventDefault()
            selectFile(id)
          }}
        >{name}
        </S.Anchor>
      </div>
      <S.IconContainer>
        {active && <StatusIcon status={status} />}

        {!active && (
          <S.DeleteButton onClick={(ev) => {
            ev.preventDefault()
            deleteFile(id)
          }}
          >
            <I.Close width='10px' height='10px' />
          </S.DeleteButton>)}
      </S.IconContainer>
    </S.ListItem>
  )
}
