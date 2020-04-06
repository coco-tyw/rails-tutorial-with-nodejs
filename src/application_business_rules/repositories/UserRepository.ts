import * as entities from "@/enterprise_business_rules/entities";

export class UserRepository {
  private repository: UserRepositoryInterface
  constructor(repository: UserRepositoryInterface) {
    this.repository = repository
  }

  persist(userEntity: entities.UserType) {
    return this.repository.persist(userEntity)
  }

  merge(userEntity: entities.UserType) {
    return this.repository.merge(userEntity)
  }

  remove(userId: number) {
    return this.repository.remove(userId)
  }

  getList() {
    return this.repository.getList()
  }

  get(userId: number) {
    return this.repository.get(userId)
  }
  
  getByEmail(email: string) {
    return this.repository.getByEmail(email)
  }
}

export interface UserRepositoryInterface {
  persist(userEntity: entities.UserType): void
  merge(userEntity: entities.UserType): void
  remove(userId: number): void
  getList(): Promise<entities.UserType[]>
  get(userId: number): Promise<entities.UserType>
  getByEmail(email: string): void
}