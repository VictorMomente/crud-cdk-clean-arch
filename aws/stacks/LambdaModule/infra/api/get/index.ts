import { Construct, Duration } from '@aws-cdk/core'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import { RetentionDays } from '@aws-cdk/aws-logs'
import { ParameterTier, ParameterType, StringParameter } from '@aws-cdk/aws-ssm'
import * as lambda from '@aws-cdk/aws-lambda'
import * as path from 'path'
import { importRole } from '../../../../helpers/import-role'

export function makeGetInfoApiLambda(app: Construct) {
  const functionName = 'Main-Api-User-getInfo'
  const importedRole = importRole(app, 'GetInfoApiLambda', 'App@Lambda=FullAccess')
  const resource = new NodejsFunction(app, functionName, {
    handler: 'handler',
    functionName: functionName,
    role: importedRole as any,
    entry: path.join(__dirname, `/handler.ts`),
    runtime: lambda.Runtime.NODEJS_14_X,
    logRetention: RetentionDays.SIX_MONTHS,
    timeout: Duration.seconds(15)
  })
  new StringParameter(app, 'modules.lambda.api.get-info', {
    parameterName: 'modules.lambda.api.get-info',
    stringValue: resource.functionArn,
    type: ParameterType.STRING,
    tier: ParameterTier.STANDARD
  })
  return resource
}
