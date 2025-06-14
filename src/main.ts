import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(
    '/man',
    createProxyMiddleware({
      target: process.env.MAN_API || 'http://host.docker.internal:7002',
      changeOrigin: true,
      pathRewrite: { '^/man': '' }, // remove base path
    }),
  );
  app.use(
    '/metaso',
    createProxyMiddleware({
      target: 'http://host.docker.internal:7171',
      changeOrigin: true,
      pathRewrite: { '^/metaso': '' }, // remove base path
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
