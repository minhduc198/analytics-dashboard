export interface INotification {
  id: string
  requesterName: string
  requesterAvatar: string
  requesterOnline: boolean
  action: string
  projectName: string
  targetType: string
  createdAt: string
  timeAgo: string
}

export interface IBreadcrumb {
  href: string
  name: string
}

export interface ISeries {
  name: string
  data: number[]
}

export interface ColumnHeader<T> {
  id: keyof T
  label: string
  cellRender?: (row: T) => React.ReactNode
}
