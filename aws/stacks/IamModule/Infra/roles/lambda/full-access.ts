import { ManagedPolicy, Role, ServicePrincipal } from '@aws-cdk/aws-iam'
import { ParameterTier, ParameterType, StringParameter } from '@aws-cdk/aws-ssm'
import { Construct } from '@aws-cdk/core'

export function makeFullAccessRole(app: Construct) {
  const lambdaRole = new Role(app, 'fullAccessRole', {
    roleName: 'App@Lambda=FullAccess',
    assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
    description: 'Acesso de administrador',
    managedPolicies: [
      ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess')
    ]
  })
  new StringParameter(app, 'modules.iam.lambda.full-access', {
    parameterName: 'modules.iam.lambda.full-access',
    stringValue: lambdaRole.roleArn,
    type: ParameterType.STRING,
    tier: ParameterTier.STANDARD
  })
}