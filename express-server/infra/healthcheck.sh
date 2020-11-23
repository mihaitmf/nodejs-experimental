#!/usr/bin/env bash

if code=$(curl -sI -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/) && [ "$code" -lt "400" ]; then
    exit 0
fi

exit 1
