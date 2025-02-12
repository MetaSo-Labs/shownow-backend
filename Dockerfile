FROM pnpm/pnpm:latest

WORKDIR /app

COPY . /app

RUN pnpm install


RUN pnpm run build

EXPOSE 3000

CMD pnpm run start:prod