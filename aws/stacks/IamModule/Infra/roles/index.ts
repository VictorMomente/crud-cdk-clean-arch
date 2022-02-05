
import { Construct, StackProps } from '@aws-cdk/core'
import { makeFullAccessRole } from './lambda/full-access'

export class RolesModule extends Construct {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id)
    makeFullAccessRole(this)
  }
}
