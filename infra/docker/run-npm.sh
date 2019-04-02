#!/usr/bin/env bash

IMAGE_NAME="node:10"

PROJECT_DIR=$(realpath "$1")

shift # use shift to "consume" the first argument, then pass "$@", i.e., the list of remaining arguments:

docker run --rm \
    --volume ${PROJECT_DIR}:${PROJECT_DIR} \
    --workdir ${PROJECT_DIR} \
    ${IMAGE_NAME} npm "$@"
