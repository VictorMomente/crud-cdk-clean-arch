import { Construct } from '@aws-cdk/core'
import { makeGetInfoApiLambda } from './get'

export class GetInfoModuleLambdas extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)
    makeGetInfoApiLambda(this)
  }
}
