
// import 'source-map-support/register'
import * as dynamodb from 'serverless-dynamodb-client'

export const hello = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success',
      input: event,
    }),
  }

  callback(null, response);

}
