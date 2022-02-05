import { Construct, StackProps } from '@aws-cdk/core'
import { makeUsersTable } from './users'

export class TablesModule extends Construct {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id)
    makeUsersTable(this)
  }
}
