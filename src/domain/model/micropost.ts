export interface MicropostRepository {
  findById(id: string): Micropost
  create(micropost: Micropost): void
  delete(id: number): void
}

export type Micropost = {
  id: number
  user_id: number
  content: string
  updatedAt: number
  createdAt: number
}