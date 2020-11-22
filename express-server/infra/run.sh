#!/usr/bin/env bash

IMAGE_NAME="mihaitmf/node-express-service:latest"
CONTAINER_NAME="node-express-service"
HOST_PORT=8080

# stop and remove if exists
(docker rm -fv ${CONTAINER_NAME}) > /dev/null 2>&1

# start container from scratch
docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${HOST_PORT}:8080 \
    ${IMAGE_NAME}
