#!/usr/bin/env bash

IMAGE_NAME="node:10"

if [[ -z "$2" ]] ; then
    PROJECT_DIR=$(pwd) # if the second command argument is not given, default value is current directory
else
    PROJECT_DIR=$(realpath "$2")
fi

docker run --rm \
    --volume ${PROJECT_DIR}:${PROJECT_DIR} \
    --workdir ${PROJECT_DIR} \
    ${IMAGE_NAME} npm "$1"
