FROM node:22-alpine

# 安装 Corepack 并启用
RUN apk add --no-cache corepack && corepack enable

# 准备并激活 pnpm
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . /app

RUN pnpm install


RUN pnpm run build

EXPOSE 3000

CMD pnpm run start:prod