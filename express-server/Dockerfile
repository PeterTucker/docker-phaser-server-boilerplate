FROM node:latest

MAINTAINER Peter Tucker "peter@gomvdesigns.com"
LABEL version="1.0.0"
LABEL description="RPG Trainer Docker Project"

RUN npm install nodemon -g

WORKDIR /opt/app
ADD package.json /opt/app

RUN npm install