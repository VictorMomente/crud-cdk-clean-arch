import { Construct } from '@aws-cdk/core'
import { AttributeType, BillingMode, StreamViewType, Table } from '@aws-cdk/aws-dynamodb'
import { ParameterTier, ParameterType, StringParameter } from '@aws-cdk/aws-ssm'

export function makeUsersTable(app: Construct) {
  const resource = new Table(app, 'UsersTable', {
    partitionKey: { name: 'id', type: AttributeType.STRING },
    tableName: 'users',
    stream: StreamViewType.NEW_AND_OLD_IMAGES,
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecovery: true
  })

  new StringParameter(app, 'modules.users.dynamodb.table.users', {
    parameterName: 'modules.dynamodb.tables.users',
    stringValue: resource.tableName,
    type: ParameterType.STRING,
    tier: ParameterTier.STANDARD
  })
  return resource
}
