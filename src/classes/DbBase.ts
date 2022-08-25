import {DbBaseProps} from "../interfaces/interafaces";

export abstract class DbBase {
  protected tableName: string
  protected schemaName: string
  protected columns: string[]

  protected constructor(options: DbBaseProps) {
    if (options.columns.length === 0) {
      throw new Error('Model constructor requires columns defined')
    }
    this.tableName = options.tableName
    this.schemaName = options.schemaName
    this.columns = options.columns
  }
}
