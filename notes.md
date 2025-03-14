# Docker

Make sure the exposed port in the Dockerfile matches the port the app is listening to for requests.

build: `docker build -t <APP_NAME> .`

run: `docker run -p <PORT>:<PORT> <APP_NAME>`
