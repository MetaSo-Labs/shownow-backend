FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . /app

RUN pnpm install


RUN pnpm run build

EXPOSE 3000

CMD pnpm run start:prod