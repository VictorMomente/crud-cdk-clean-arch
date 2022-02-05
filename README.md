Docs CDK:
https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html

Docs DynamoDb CDK:
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_lib_dynamodb.html

Query:

<!-- const query: QueryCommandInput = {
  TableName: this.TABLE_NAME,
  IndexName: 'parentExperienceId',
  KeyConditionExpression: '#parentExperienceId = :parentExperienceId',
  ExpressionAttributeNames: {
    '#parentExperienceId': 'parent_experience_id'
  },
  ExpressionAttributeValues: {
    ':parentExperienceId': parentExperienceId
  },
}
console.log(`> query parent: ${JSON.stringify(query)}`)
const response = await this.client.send(new QueryCommand(query))
const experience = response.Items -->
