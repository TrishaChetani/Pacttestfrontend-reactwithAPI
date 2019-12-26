FROM node:12.4.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent


