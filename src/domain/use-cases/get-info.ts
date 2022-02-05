import { User } from '../entities/user'

export interface GetInfo {
  get: (id: string) => Promise<User>
}
