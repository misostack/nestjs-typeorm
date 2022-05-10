FROM node:16.15.0-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start:prod"]