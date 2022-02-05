import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'
import { adaptAPIGatewayProxyEventV2Route } from '../../../../../../src/infra/adapters/aws-api-gateway-proxy-event-v2-adapter'
import { makeGetInfoController } from '../../../../../../src/main/factories/controllers/get-info-factory'

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  console.log('event: ', JSON.stringify(event))
  const response = await adaptAPIGatewayProxyEventV2Route(event, makeGetInfoController())
  return response
}
