# docker-node-sqs

docker based environment to work with AWS SQS using nodeJs
To know more Read my Blog - [NodeJS Consumer for AWS SQS using Docker](https://rajislearning.com/nodejs-consumer-for-aws-sqs-using-docker/)

## Install Dependency

```
sh npm.sh npm install
```

## Running the consumer

To run the consumer run the following commands

```
docker-compose pull
```

```
docker-compose build --force-rm --pull
```

```
docker-compose up
```

## pushing a message to queue for testing

```
docker-compose run --rm my-sqs-consumer npm run write -- '{"first_name":"Raj","last_name":"deol","love_to":"travel"}'
```
