# Node.js experimental project
Collection of small and simple applications using Node.js, Express, Nodemon, Docker, with the main purpose of learning node.js

## Quick start
Create environment:
`vagrant up`

Vagrant machine IP: `192.168.29.11`

Run node in docker with the local code mounted in the container:
- `infra/docker/run-node.sh path/to/script.js [container-name exposed-port]`

Run with nodemon. Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Run nodemon in docker with the local code mounted in the container:
- `infra/docker/run-nodemon.sh path/to/script.js [container-name exposed-port]`

The second and third command arguments (`container-name` and `exposed-port`) are optional and have default values `node-app` and `8080`.

## Node web server using just "http" module
Path to app: `<project-root>/http-server/`

To start the server, run:
- `infra/docker/run-node.sh http-server/http-server.js http-server 3000`

Run with nodemon:
- `infra/docker/run-nodemon.sh http-server/http-server.js http-server 3000`

To test the server from outside of the vagrant machine:
- `curl -v "192.168.29.11:3000?hello=world&aaa=123"`
- `curl -d "name=john&age=29" -X POST -v 192.168.29.11:3000` 

## Node web server using Express
Path to app: `<project-root>/express-server/`

To run the server with the sources built in a docker image, run:
- `express-server/infra/build.sh`
- `express-server/infra/run.sh`

To start the server with the sources mounted, run:
- `infra/docker/run-npm.sh express-server install`
- `infra/docker/run-node.sh express-server/express-server.js express-server 8080`

Run with nodemon:
- `infra/docker/run-nodemon.sh express-server/express-server.js express-server 8080`

To test the server from outside of the vagrant machine:
- `curl -v "192.168.29.11:8080?hello=world&aaa=123"`
- `curl -d "name=john&age=29" -X POST -v 192.168.29.11:8080` 
