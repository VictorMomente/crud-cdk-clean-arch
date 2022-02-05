import { GetInfo } from '../../domain/use-cases/get-info'
import { serverError, ok, notFound } from '../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

export class GetInfoController implements Controller {
  constructor(private readonly getInfo: GetInfo) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const id = httpRequest.pathParameters.id
      const info = await this.getInfo.get(id)
      if (!info) return notFound()
      return ok(info)
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
