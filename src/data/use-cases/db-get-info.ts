import { User } from '../../domain/entities/user'
import { GetInfo } from '../../domain/use-cases/get-info'
import { GetInfoRepository } from '../protocols/get-info-repository'

export class DbGetInfo implements GetInfo {
  constructor(private readonly getInfoRepository: GetInfoRepository) {}

  async get(id: string): Promise<User> {
    const user = this.getInfoRepository.get(id)
    return user
  }
}
