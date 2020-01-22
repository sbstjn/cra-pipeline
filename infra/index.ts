import * as cdk from '@aws-cdk/core'

import { config } from '../config'
import { Pipeline } from './stacks/pipeline'

const app = new cdk.App()

new Pipeline(app, 'Pipeline', config)

app.synth()
