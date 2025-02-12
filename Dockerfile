FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@9.15.3 --activate

WORKDIR /app

COPY . /app

RUN pnpm install


RUN pnpm run build

EXPOSE 3000

CMD pnpm run start:prod