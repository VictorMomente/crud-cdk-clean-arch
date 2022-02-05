import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { TablesModule } from "./infra/tables";

export class DynamoModule extends Stack {
  constructor(app: Construct, name: string, props?: StackProps) {
    super(app, name, props)
    new TablesModule(this, 'TablesModule', props)
  }
}
