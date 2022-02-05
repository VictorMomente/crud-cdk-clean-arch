import { dynamoHelper } from '../helpers/dynamo-helper'
import { DynamoDBDocumentClient, GetCommandInput, GetCommand } from '@aws-sdk/lib-dynamodb'
import { GetInfoRepository } from '../../../../data/protocols/get-info-repository'
import { User } from '../../../../domain/entities/user'

export class DynamoGetInfoRepository implements GetInfoRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'users'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async get(id: string): Promise<User> {
    const query: GetCommandInput = {
      TableName: this.TABLE_NAME,
      Key: {
        id: id
      }
    }
    console.log(query)
    const response = await this.client.send(new GetCommand(query))
    const item = response.Item
    console.log(`> item: ${JSON.stringify(item)}`)
    return item as User
  }
}
