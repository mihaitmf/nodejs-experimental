#!/usr/bin/env bash

# example command: ./run-nodemon.sh express-server/express-server.js express-server 8080

IMAGE_NAME="mihaitmf/nodemon:latest"

EXEC_FILE="$1" # the first command line argument
CONTAINER_NAME="${2:-"node-app"}" # the second command line argument if given, or default value
HOST_PORT=${3:-8080} # the third command line argument if given, or default value
CONTAINER_PORT=${HOST_PORT}

# these are used to sync the working directory between host and container
HOST_WORK_DIR=$(realpath $(dirname $(readlink -f "$0"))/../..)
CONTAINER_WORK_DIR=/usr/src/app

# stop and remove if exists
(docker rm -fv ${CONTAINER_NAME}) > /dev/null 2>&1

# start container from scratch
docker run --detach \
    --name ${CONTAINER_NAME} \
    --publish ${HOST_PORT}:${CONTAINER_PORT} \
    --volume ${HOST_WORK_DIR}:${CONTAINER_WORK_DIR} \
    --workdir ${CONTAINER_WORK_DIR} \
    ${IMAGE_NAME} ${EXEC_FILE}

