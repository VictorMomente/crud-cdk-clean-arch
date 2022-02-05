#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { ApisModule, DynamoModule, IamModule, LambdaModule } from '../stacks'
import { env } from '../env'

const app = new cdk.App()

new IamModule(app, 'IamModule', env)
new LambdaModule(app, 'LambdaModule', env)
new ApisModule(app, 'ApisModule', env)
new DynamoModule(app, 'DynamoModule', env)
