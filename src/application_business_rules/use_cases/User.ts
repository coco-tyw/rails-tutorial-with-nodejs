import * as repositories from "@/application_business_rules/repositories"
import * as entities from "@/enterprise_business_rules/entities"

export function CreateUser(
  name: string,
  email: string,
  password: string,
  ripos: { userRepository: InstanceType<typeof repositories.UserRepository>}
) {
  const user = new entities.User(NaN, name, email, password)
  return ripos.userRepository.persist(user)
}

export function DeleteUser(
  userId: number,
  ripos: { userRepository: InstanceType<typeof repositories.UserRepository>}
) {
  return ripos.userRepository.remove(userId)
}

export function GetUsers(
  ripos: { userRepository: InstanceType<typeof repositories.UserRepository>}
) {
  return ripos.userRepository.getList()
}

export function GetUser(
  userId: number,
  ripos: { userRepository: InstanceType<typeof repositories.UserRepository>}
) {
  return ripos.userRepository.get(userId)
}