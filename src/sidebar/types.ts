export type FileStatus = 'editing' | 'saving' | 'saved'

export type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: FileStatus
}
