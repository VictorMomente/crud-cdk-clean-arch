import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { GetInfoModuleLambdas } from './infra/api'

export class LambdaModule extends Stack {
  constructor(app: Construct, name: string, props?: StackProps) {
    super(app, name, props)
    new GetInfoModuleLambdas(this, 'GetInfoModuleLambdas')
  }
}
