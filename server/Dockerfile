FROM node:lts

WORKDIR /app

COPY tsconfig.json package.json ./

RUN npm i

COPY ./src ./src

CMD ["npm", "run", "start"]