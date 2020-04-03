import * as model from '@/domain/model'
import * as command from "@/application/command"
import * as presenter from "@/application/presenter"
import * as view from "@/application/view"

export interface UserRepository {
  userRepository: model.UserRepository
  micropostRepository: model.MicropostRepository
}

export class User implements UserRepository {
  userRepository: model.UserRepository
  micropostRepository: model.MicropostRepository

  constructor(userRepository: model.UserRepository, micropostRepository: model.MicropostRepository) {
    this.userRepository = userRepository
    this.micropostRepository = micropostRepository
  }

  createUser(u: User, com: command.CreateUser): view.User {
    const user = model.NewUser(com.name, com.email, com.password)
    this.userRepository.create(user)
    return new presenter.UserResolver([]).resolve(user)
  }
}