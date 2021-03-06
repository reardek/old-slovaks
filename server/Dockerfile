FROM node:lts

COPY package.json tsconfig.json ./
COPY prisma/ prisma/
COPY .env .
RUN npm install -g @prisma/cli
RUN npm install 

COPY dist/ dist/
CMD ["node", "./dist/index.js"]