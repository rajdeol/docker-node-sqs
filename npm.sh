#!/bin/bash

docker run --rm \
--name=node-$$ \
-v $(pwd):/usr/src/app \
-w "/usr/src/app" \
-e http_proxy=$DOCKER_LOCAL_PROXY \
-e https_proxy=$DOCKER_LOCAL_PROXY \
-e HTTP_PROXY=$DOCKER_LOCAL_PROXY \
-e HTTPS_PROXY=$DOCKER_LOCAL_PROXY \
node:8 ${*}
