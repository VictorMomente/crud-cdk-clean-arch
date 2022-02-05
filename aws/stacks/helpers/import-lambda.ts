import { StringParameter } from '@aws-cdk/aws-ssm'
import { Construct } from '@aws-cdk/core'
import { Function } from "@aws-cdk/aws-lambda";

export const importLambda = (app: Construct, parameterId: string): Function => {
  const lambdaArn = StringParameter.fromStringParameterName(
    app,
    parameterId,
    parameterId
  ).stringValue
  const lambda = Function.fromFunctionAttributes(app, `${parameterId}:ParameterStore`, {
    sameEnvironment: true,
    functionArn: lambdaArn
  }) as Function
  return lambda
}
