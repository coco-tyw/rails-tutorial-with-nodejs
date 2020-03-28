import * as model from '@/domain/model'
import moment from 'moment'

export function toDomain(): model.User {
  return {
    id: 1,
    name: "a",
    email: "a",
    updatedAt: moment(),
    createdAt: moment()
  }
}

export function NewUserRepository () {
  const writer = () => {}
  const reader = () => {}
  return {
    writer,
    reader
  }
}

export function create(u: ReturnType<typeof NewUserRepository>, user: model.User): void {

}

export function update(u: ReturnType<typeof NewUserRepository>, user: model.User): void {
  
}