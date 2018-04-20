# serverless-concourse

Serverless API framework (AWS Lambda, DynamoDB) that makes development and iteration faster.

*This is a work-in-progress boilerplate for serverless. Not yet safe to use.*

## Checklist for development

### Setup

- Make sure your environment has the following dependencies installed:
  - [Docker](https://docs.docker.com/install/)
  - [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  - [NVM](https://github.com/creationix/nvm)
- Run `nvm install <.nvmrc && nvm use <.nvmrc` to make sure you're using the appropriate version of node for this repository.
- Run `npm install` to install module dependencies.

### Development

- Run `STAGE=dev npm test` to verify that all tests complete without errors.
- To start offline development, run `STAGE=dev npm run offline:start` to start your lambda service locally. To stop it later, run `STAGE=dev npm run offline:stop`. While running, you can access your endpoints at http://localhost:3000/. The healthcheck endpoint would be at `http://localhost:3000/healthcheck` and your DynamoDB shell is at http://localhost:8000/shell.
  - _serverless-offline_ starts the local DynamoDB service as well.
  - In case you only need _DynamoDB_ local to run, start it with `STAGE=dev npm run dynamo:start`. In a few seconds you'll be able to access the local DynamoDB console at http://localhost:8000/shell. You can stop the service with `STAGE=dev npm run dynamo:stop` when you're done. Be sure to click the information icon now and let the feature introduction guide you through the UI.

### Deploy to AWS

1. Run `STAGE=dev AWS_PROFILE=default AWS_REGION=eu-west-1 npm run aws:deploy` to deploy all endpoints for the default stage to AWS. Run `STAGE=dev AWS_PROFILE=default AWS_REGION=eu-west-1 npm run aws:remove` to remove it.

