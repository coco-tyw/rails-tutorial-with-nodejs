import * as repositories from "@/application_business_rules/repositories"
import * as entities from "@/enterprise_business_rules/entities"

export default class UseCase {
  private userRepository: repositories.UserRepository

  constructor(ur: repositories.UserRepository) {
    this.userRepository = ur
  }

  createUser(
    name: string,
    email: string,
    password: string,
  ) {
    const user = new entities.User(NaN, name, email, password)
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