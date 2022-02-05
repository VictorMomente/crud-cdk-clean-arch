import { User } from '../../domain/entities/user'

export interface GetInfoRepository {
  get: (id: string) => Promise<User>
}
