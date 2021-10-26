import * as S from './styles'
import * as I from 'ui/icons'

export function Content () {
  return (
    <S.Layout>
      <S.Header>
        <I.FileIcon color='#1FC8E1' />
        <S.Input value='CONTRIBUT' autoFocus />
      </S.Header>

      <S.TextArea placeholder='Type your markdown here!' />
      <S.OutputContainer>
        <h1>Bootcamp</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </S.OutputContainer>
    </S.Layout>
  )
}
