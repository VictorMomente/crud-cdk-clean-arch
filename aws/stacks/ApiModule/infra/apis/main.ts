import { Cors, LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway'
import { Construct } from '@aws-cdk/core'
import { importLambda } from '../../../helpers/import-lambda'

export function makeMainApi(app: Construct) {
  const mainApi = new RestApi(app, 'MainApi', {
    restApiName: 'MainApi',
    defaultCorsPreflightOptions: {
      allowOrigins: Cors.ALL_ORIGINS
    },
    deploy: true
  })

  const users = mainApi.root.addResource('users')
  const userId = users.addResource('{id}')
  userId.addMethod('GET', new LambdaIntegration(importLambda(app, 'modules.lambda.api.get-info')))
}
