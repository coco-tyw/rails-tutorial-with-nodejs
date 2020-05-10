import { UserEntity } from "@/enterprise_business_rules/entities/types"

export interface UserRepository {
  persist(userEntity: UserEntity): void
  merge(userEntity: UserEntity): void
  remove(userId: number): void
  getList(): Promise<UserEntity[]>
  get(userId: number): Promise<UserEntity>
  getByEmail(email: string): void
}