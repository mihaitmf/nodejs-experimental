#!/usr/bin/env bash

WORK_DIR=/var/nodejs-experimental

# set working directory after vagrant ssh
echo "cd $WORK_DIR" >> /home/vagrant/.bashrc

# install nodejs, it includes also npm (optional step because we run node from docker, but just to experiment)
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
bash nodesource_setup.sh
rm -f nodesource_setup.sh
apt install -y nodejs
