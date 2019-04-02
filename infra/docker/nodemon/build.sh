#!/usr/bin/env bash

SCRIPT_DIR=$(realpath $(dirname "$0"))

docker build \
    --tag mihaitmf/nodemon:latest \
    --file ${SCRIPT_DIR}/Dockerfile \
    ${SCRIPT_DIR}
