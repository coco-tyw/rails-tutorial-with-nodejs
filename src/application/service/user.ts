import * as model from '@/domain/model'
import * as command from "@/application/command"
import * as presenter from "@/application/presenter"
import * as view from "@/application/view"

type User = {
  userRepository: model.UserRepository
  micropostRepository: model.MicropostRepository
}
function createUser(u: User, com: command.CreateUser): view.User {
  const user = model.NewUser(com.name, com.email, com.password)
  u.userRepository.create(user)
  return new presenter.UserResolver([]).resolve(user)
}

declare function getUser(u: User, userId: number): view.User

declare function getUsers(u: User, groudId: number): view.Users

function deleteUser(u: User, userId: number): void {
  return u.userRepository.delete(userId)
}