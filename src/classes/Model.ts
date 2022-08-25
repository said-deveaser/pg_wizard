import {Pool} from 'pg'
import {ModelProps} from "../interfaces/interafaces";
import {Select} from "./Select";
import {DbBase} from "./DbBase";

export class Model<Row extends Record<string, any>> extends DbBase {
  private readonly selectTool: Select<Row>

  constructor(pool: Pool, options: ModelProps) {
    super(options)
    this.selectTool = new Select<Row>(pool, options)
  }

  public select = (): Select<Row> => {
    return this.selectTool
  }
}
