import { Role } from '@aws-cdk/aws-iam'
import { Construct } from '@aws-cdk/core'

export const importRole = (app: Construct, roleId: string, roleName: string): any => {
  const importedRole = Role.fromRoleArn(app, roleId, `arn:aws:iam::139284933692:role/${roleName}`, { mutable: false }) as any
  return importedRole
}
