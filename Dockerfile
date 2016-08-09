## This build is used for live-reload development purposes.  You MUST
## mount a volume back to your working directly upon creation.

FROM ubuntu:16.04
MAINTAINER Duane Leem <duaneleem@alumni.ggu.edu>

## Making a random directory to -v mount the container to later.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## Install NPM.
RUN apt-get update && apt-get install -y npm

## Install live-server.
RUN npm install -g live-server -y

## Link nodejs to node via symlink.
RUN ln -s /usr/bin/nodejs /usr/bin/node

## Expose Web Port
EXPOSE 8080

## Start live-server.
CMD ["live-server", "--no-browser"]
