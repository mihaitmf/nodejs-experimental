#!/usr/bin/env bash

WORK_DIR=/var/nodejs-experimental

# set working directory after vagrant ssh
echo "cd $WORK_DIR" >> /home/vagrant/.bashrc

# (optional step because we run node from docker, but just to experiment)
# install nodejs 10.x, it includes also npm (change 10.x to 8.x if you want version 8 for example)
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
bash nodesource_setup.sh
rm -f nodesource_setup.sh
apt install -y nodejs

# nodemon: nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
# build nodemon docker image
${WORK_DIR}/infra/docker/nodemon/build.sh

# (optional step) install nodemon
npm install -g nodemon

