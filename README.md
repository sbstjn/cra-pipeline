# CRA Pipeline

[![MIT License](https://badgen.now.sh/badge/License/MIT/blue)](https://github.com/sbstjn/cra-pipeline/blob/master/LICENSE.md)
[![Read Tutorial](https://badgen.now.sh/badge/Read/Tutorial/orange)](https://sbstjn.com/deploy-react-cra-with-cdk-codepipeline-and-codebuild.html)

> Example [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) project to deploy a TypeScript SPA created with [create-react-app](https://github.com/facebook/create-react-app) using [AWS CodePipeline](https://aws.amazon.com/codepipeline/) and [AWS CodeBuild](https://aws.amazon.com/codebuild/). Of course, [styled-components](https://styled-components.com/) is included as well …
>
> [http://pipeline-files8e6940b8-tyzn4y41xz9l.s3-website-us-east-1.amazonaws.com](http://pipeline-files8e6940b8-tyzn4y41xz9l.s3-website-us-east-1.amazonaws.com/)

## Architecture

### Components

- [create-react-app](https://github.com/facebook/create-react-app) using TypeScript
- React SPA with [styled-components](https://styled-components.com/)
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) for infrastructure
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/) with GitHub hook
- Amazon S3 bucket for website hosting

## Usage

```bash
$ > yarn cdk deploy Pipeline

Pipeline: deploying...
Pipeline: creating CloudFormation changeset...

✅  Pipeline

Outputs:
Pipeline.WebsiteURL = http://pipeline-files8e6940b8-3p9gac9qjzax.s3-website-us-east-1.amazonaws.com
```

### Configuration

```js
// Edit ./config.ts

export const config = {
  github: {
    owner: 'sbstjn',
    repository: 'cra-pipeline',
  },
  env: { region: 'us-east-1' },
}
```

## Preliminaries

### Install AWS CDK

```bash
# Using NPM
$ > npm install -g aws-cdk

# Using Yarn
$ > yarn global add aws-cdk
```

### Configure AWS CLI

Generate an `Access Key` and `Secret Access Key` for your AWS account.

```bash
$ > export AWS_ACCESS_KEY_ID="…"
$ > export AWS_SECRET_ACCESS_KEY="…"
$ > export AWS_SESSION_TOKEN="…"
```

### Bootstrap AWS CDK

```bash
$ > yarn cdk bootstrap --region us-east-1

⏳  Bootstrapping environment aws://123456789001/us-east-1...

0/2 | 5:06:49 PM | CREATE_IN_PROGRESS   | AWS::S3::Bucket | StagingBucket
0/2 | 5:06:50 PM | CREATE_IN_PROGRESS   | AWS::S3::Bucket | StagingBucket Resource creation Initiated
1/2 | 5:07:11 PM | CREATE_COMPLETE      | AWS::S3::Bucket | StagingBucket

✅  Environment aws://123456789001/us-east-1 bootstrapped.
```

### Configure GitHub Token

Create a [personal access token in GitHub](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) and store it in [AWS SecretsManager](https://aws.amazon.com/secrets-manager/). The token needs permissions to read your (private) repositories and configure webhooks.

```bash
$ > aws secretsmanager create-secret \
    --name GitHubToken \
    --secret-string abcdefg1234abcdefg56789abcdefg \
    --region us-east-1

{
  "ARN": "arn:aws:secretsmanager:us-east-1:123456789001:secret:GitHubToken-uNBxTr",
  "Name": "GitHubToken",
  "VersionId": "4acda3d1-877f-4032-b38e-17bc50239883"
}
```
