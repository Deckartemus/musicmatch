FROM node:18.16.0

WORKDIR /app

COPY ./package*.json .babelrc ./

RUN yarn install

COPY ./src ./

EXPOSE 3000

CMD ["yarn", "start", "--", "--host", "0.0.0.0"]
