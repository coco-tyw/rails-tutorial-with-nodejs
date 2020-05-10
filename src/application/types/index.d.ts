import { UserEntity } from "@/domain/models/types"

export interface UserRepository {
  persist(userEntity: UserEntity): void
  merge(userEntity: UserEntity): void
  remove(userId: number): void
  getList(): Promise<UserEntity[]>
  get(userId: number): Promise<UserEntity>
  getByEmail(email: string): void
}