FROM node:15

WORKDIR /usr/src/app

COPY wait-for-it.sh /wait-for-it.sh
COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm install && \
    chmod +x /wait-for-it.sh

EXPOSE 3000
