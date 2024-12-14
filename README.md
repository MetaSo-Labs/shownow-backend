



## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```



## Docker Compose file

```yaml
version: "3"
services:
  server:
    image: ghcr.io/feiyang1020/server-shownow:1d0f31ad621f014a8520de41f6830bb035b31706
    container_name: server
    restart: always
    ports:
      - 3000:3000
    scale: 1
    volumes:
      - ./data:/app/data  
    env_file:
      - ./.env

```
## .env 

```yaml
USERNAME=xxx
PASSWORD=xxxxxx
```
##  Running with docker-compose

```bash

# srart
$ docker-compose up -d

```
## Guide for Local Deployment

1. **Access the Login Dashboard**
   - Open your browser and navigate to `http://localhost:3000/dashboardLogin`.
   - You will see the login interface. Use the `username` and `password` set in the `.env` file to log in.
  
     
     ![images](https://github.com/feiyang1020/server-shownow/blob/main/images/login.png)

2. **Configure Theme and Settings**
   - You can easily customize the theme color, logo, and fees through the provided options.

     
   ![image](https://github.com/feiyang1020/server-shownow/blob/main/images/styles.png)
   ![image](https://github.com/feiyang1020/server-shownow/blob/main/images/save.png)

3. **Apply and Check Settings**
   - Once configured, the settings will take effect immediately. You can then access the updated interface at `http://localhost:3000/`.
  
     
    ![image](https://github.com/feiyang1020/server-shownow/blob/main/images/shownow.png)
    ![image](https://github.com/feiyang1020/server-shownow/blob/main/images/shownowhome.png)

shownow： http://47.243.174.112:8707 
后台入口：http://47.243.174.112:8707/dashboardLogin 
账号： show 密码：show123


