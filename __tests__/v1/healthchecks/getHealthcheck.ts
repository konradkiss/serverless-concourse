/**
 * Local tests for the GET /v1/healthcheck endpoint.
 *
 * Generated on 2018-4-20 by yo generator-serverless-concourse.
 * @author Konrad Kiss
 */

import * as mod from '../../../functions/v1/healthchecks/getHealthcheck'
import * as Wrapper from 'lambda-wrapper'
const lambda = Wrapper.wrap(mod, { handler: 'getHealthcheck' })

describe('/v1/healthchecks/getHealthcheck.getHealthcheck', () => {

  let response

  beforeAll(async (done) => {
    response = await lambda.run({ test: 'cbsuccess'})
    done()
  })

  it('should return 200', () => {
    expect(response.statusCode).toEqual(200)
  })

  it('should return sent input', () => {
    expect(JSON.parse(response.body).input.test).toEqual('cbsuccess')
  })

})
