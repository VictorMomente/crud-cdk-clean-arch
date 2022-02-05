import { Construct, StackProps } from '@aws-cdk/core'
import { makeMainApi } from './main'

export class ApiModule extends Construct {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id)
    makeMainApi(this)
  }
}
