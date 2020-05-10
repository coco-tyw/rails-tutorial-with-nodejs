import { User } from "@/domain/models"
import { UserRepository } from "./types"

export default class UseCase {
  private userRepository: UserRepository

  constructor(ur: UserRepository) {
    this.userRepository = ur
  }

  createUser(
    name: string,
    email: string,
    password: string,
  ) {
    const user = new User(NaN, name, email, password)
    return this.userRepository.persist(user)
  }
  
  deleteUser(
    userId: number,
  ) {
    return this.userRepository.remove(userId)
  }
  
  getUsers(
  ) {
    return this.userRepository.getList()
  }
  
  getUser(
    userId: number,
  ) {
    return this.userRepository.get(userId)
  }
}