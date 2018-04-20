/**
 * Handler for the GET /v1/healthcheck endpoint.
 *
 * Generated on 2018-4-20 by yo generator-serverless-concourse.
 * @author Konrad Kiss
 */

export const getHealthcheck = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(new Date().getTime() / 1000),
      input: event,
    }),
  }

  callback(null, response)
}
