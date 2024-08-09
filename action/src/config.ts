export const config : Config = {
  api: {
    url: new URL('http://access-tokens.access-tokens:3000'),
    // auth: {
    //   aws: {
    //     roleArn: 'arn:aws:iam::123456789012:role/github-actions-access-token-api-access',
    //     region: 'eu-central-1',
    //     service: 'lambda',
    //   },
    // },
  },
};

interface Config {
  api: {
    url: URL
    auth?: {
      aws?: {
        roleArn: string
        region: string
        service: 'lambda' | 'execute-api'
      }
    }
  }
}


