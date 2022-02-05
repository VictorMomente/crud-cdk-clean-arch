import { GetInfoController } from '../../../presentation/controllers/get-info-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbGetInfoUseCase } from '../use-cases/db-get-info-factory'

export const makeGetInfoController = (): Controller => {
  return new GetInfoController(makeDbGetInfoUseCase())
}
