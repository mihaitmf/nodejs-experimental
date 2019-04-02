# Node.js experimental project
Small and simple applications with the main purpose of learning node.js

## Quick start
Create environment:
`vagrant up`

Run node in docker with the local code mounted in the container:
- `infra/docker/run-node.sh path/to/script.js [container-name exposed-port]`

The second and third command arguments (`container-name` and `exposed-port`) are optional and have default values `node-app` and `8080`.

## Node web server using just "http" module
Path to app: `<project-root>/http-server/`

To start the server, run:
- `infra/docker/run-node.sh http-server/http-server.js http-server 3000`

To test the server from outside of the vagrant machine:
- `curl -v "192.168.29.11:3000?hello=world&aaa=123"`
- `curl -d "name=john&age=29" -X POST -v 192.168.29.11:3000` 

## Node web server using Express
Path to app: `<project-root>/express-server/`

To run the server with the sources built in a docker image, run:
- `express-server/infra/build.sh`
- `express-server/infra/run.sh`

To start the server with the sources mounted, run:
- `infra/docker/run-npm.sh install express-server`
- `infra/docker/run-node.sh express-server/express-server.js express-server 8080`

To test the server from outside of the vagrant machine:
- `curl -v "192.168.29.11:8080?hello=world&aaa=123"`
- `curl -d "name=john&age=29" -X POST -v 192.168.29.11:8080` 
