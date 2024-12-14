import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ShowConfModule } from './show-conf/show-conf.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasePath } from './constants/Global';
import { ShowConf } from './show-conf/entities/show-conf.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api/(.*)'],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: DatabasePath,
      synchronize: true,
      entities: [ShowConf],
    }),
    AuthModule,
    ShowConfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
