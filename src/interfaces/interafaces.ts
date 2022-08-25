
export interface DbBaseProps {
  schemaName: string
  tableName: string
  columns: string[]
}

export interface ModelProps extends DbBaseProps {}
