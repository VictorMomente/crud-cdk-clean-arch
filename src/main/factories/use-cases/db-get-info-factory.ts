import { DbGetInfo } from '../../../data/use-cases/db-get-info'
import { GetInfo } from '../../../domain/use-cases/get-info'
import { DynamoGetInfoRepository } from '../../../infra/db/dynamo/repositories/dynamo-get-info'

export const makeDbGetInfoUseCase = (): GetInfo => {
  const getInfoRepository = new DynamoGetInfoRepository()
  return new DbGetInfo(getInfoRepository)
}
