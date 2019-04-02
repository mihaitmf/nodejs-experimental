#!/usr/bin/env bash

SCRIPT_DIR=$(realpath $(dirname "$0"))

docker build \
    --tag mihaitmf/node-express-service:latest \
    --file ${SCRIPT_DIR}/Dockerfile \
    ${SCRIPT_DIR}/../
