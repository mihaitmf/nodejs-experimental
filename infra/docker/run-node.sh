#!/usr/bin/env bash

# example command: ./run-node.sh express-server/express-server.js express-server 8080

IMAGE_NAME="node:10"

EXEC_FILE="$1" # the first command line argument
CONTAINER_NAME="${2:-"node-app"}" # the second command line argument if given, or default value
HOST_PORT=${3:-8080} # the third command line argument if given, or default value
CONTAINER_PORT=${HOST_PORT}

# needed to sync working directory
HOST_WORK_DIR=$(realpath $(dirname $(readlink -f "$0"))/../..)
CONTAINER_WORK_DIR=/usr/src/app

# stop and remove if exists
(docker stop ${CONTAINER_NAME} && docker rm ${CONTAINER_NAME}) > /dev/null 2>&1

# start container from scratch
docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    --volume ${HOST_WORK_DIR}:${CONTAINER_WORK_DIR} \
    --workdir ${CONTAINER_WORK_DIR} \
    ${IMAGE_NAME} node ${EXEC_FILE}

