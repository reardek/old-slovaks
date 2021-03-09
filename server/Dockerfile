FROM node:lts

WORKDIR /app

COPY tsconfig.json package.json .env ./

RUN npm i

CMD ["npm", "run", "start"]