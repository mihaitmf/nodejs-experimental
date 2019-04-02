# node-simple-rest-api
Simple REST API created with Node.js, Express.js, MongoDB and Docker

## Quick start
Create environment:
`vagrant up`

Run node in docker:
- `infra/docker/run-node.sh path/to/script.js [container-name exposed-port]`

The second and third command arguments (`container-name` and `exposed-port`) are optional and have default values `node-app` and `8080`.

## Node web server using just "http" module
To start the server run:
- `infra/docker/run-node.sh http-server/http-server.js http-server 3000`

To test the server from outside of the vagrant machine:
- `curl -v "192.168.29.11:3000?hello=world&aaa=123"`
- `curl -d "name=john&age=29" -X POST -v 192.168.29.11:3000` 
