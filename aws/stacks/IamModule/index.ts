import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { RolesModule } from "./Infra/roles";

export class IamModule extends Stack {
  constructor(app: Construct, name: string, props?: StackProps) {
    super(app, name, props)
    new RolesModule(this, 'RolesModule', props)
  }
}
