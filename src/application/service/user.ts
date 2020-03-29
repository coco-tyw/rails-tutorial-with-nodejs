import * as model from '@/domain/model'
import * as command from "@/application/command"
import * as presenter from "@/application/presenter"
import * as view from "@/application/view"

export type User = {
  userRepository: model.UserRepository
  micropostRepository: model.MicropostRepository
}
export function createUser(u: User, com: command.CreateUser): view.User {
  const user = model.NewUser(com.name, com.email, com.password)
  u.userRepository.create(user)
  return new presenter.UserResolver([]).resolve(user)
}

export declare function getUser(u: User, userId: number): view.User

export declare function getUsers(u: User, groudId: number): view.Users

export function deleteUser(u: User, userId: number): void {
  return u.userRepository.delete(userId)
}