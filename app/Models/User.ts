import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @computed()
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
