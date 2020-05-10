import { UserRepository } from "@/application/types"
import { User } from "@/domain/models"
import { UserEntity } from "@/domain/models/types"

export default class UserRepositoryInMemory implements UserRepository {

  private index: number
  private data: { [n: number]: UserEntity }
  constructor() {
    this.index = 1
    this.data = {}
    this._initializeRepository()
  }
  
  _initializeRepository() {
    const john = new User(NaN, 'John', 'john@mail.com', 'QWRASDZXC')
    const jane = new User(NaN, 'Jane', 'jane@mail.com', 'POILKJMNB')
    this.persist(john).then(() => this.persist(jane))
  }

  _dataAsArray() {
    return Object.keys(this.data).map((key: string) => this.data[Number(key)])
  }

  persist(user: UserEntity) {
    const row = Object.assign({}, user)
    const rowId = this.index++
    row.id = rowId
    this.data[rowId] = row
    return Promise.resolve(row)
  }

  merge(user: UserEntity) {
    let row = this.data[user.id]
    Object.assign(row, user)
    return Promise.resolve(row)
  }

  remove(userId: number) {
    delete this.data[userId]
    return Promise.resolve()
  }

  get(userId: number) {
    return Promise.resolve(this.data[userId])
  }

  getList() {
    const users = this._dataAsArray()
    return Promise.resolve(users)
  }

  getByEmail(userEmail: string) {
    const users = this._dataAsArray()
    return Promise.resolve(users.find(user => user.email === userEmail))
  }
}