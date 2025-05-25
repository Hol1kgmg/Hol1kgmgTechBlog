ARG NODE_VERSION=22
ARG NPM_VERSION=11.4.1

FROM node:${NODE_VERSION}

WORKDIR /frontend

COPY package*.json panda.config.ts ./

# npmのバージョンアップグレードとパッケージのインストール
RUN npm install -g npm@${NPM_VERSION} && \
    npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
