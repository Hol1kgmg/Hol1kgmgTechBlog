FROM node:20-alpine

WORKDIR /src

# frontendディレクトリはビルドコンテキスト（docker）外なので、さらに一つ上の階層を参照
COPY ../../frontend/package*.json ./

RUN npm install

# フォントファイルを含むすべてのファイルをコピー
COPY ../../frontend/ .

EXPOSE 3000

CMD ["npm", "run", "dev"]