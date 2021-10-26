import * as S from './styles'
import * as I from 'ui/icons'
import { FileStatus } from 'resources/types'

export type StatusIconProps = {
  status: FileStatus
}

export function StatusIcon ({ status = 'saved' }: StatusIconProps) {
  const Comp = {
    saving: <S.RotateAnimation><I.Loading width='10px' height='10px' /></S.RotateAnimation>,
    saved: <I.Check width='10px' height='10px' />,
    editing: <I.Ellipse width='8px' height='9px' />,
  }[status]

  return Comp
}
