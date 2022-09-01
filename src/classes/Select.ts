import { Pool, QueryResult } from 'pg'
import { DbBase } from './DbBase'
import { DbBaseProps } from '../interfaces/interafaces'

export class Select<Row extends Record<string, any>> extends DbBase {
  private readonly pool: Pool

  constructor(pool: Pool, props: DbBaseProps) {
    super(props)
    this.pool = pool
  }

  public async query(): Promise<QueryResult<Row[]>> {
    let sql = 'SELECT'
    this.columns.forEach((columnName, i) => {
      sql += ` ${columnName}`
      if (this.columns.length - 1 !== i) {
        sql += ','
      }
    })
    //
    sql += ` FROM ${this.schemaName}.${this.tableName}`
    console.log(sql)
    return await this.pool.query<Row[]>(sql)
  }
}
