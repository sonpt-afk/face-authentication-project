import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APIPrefix } from 'src/common/constants/common';

export const SwaggerSetting = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('FaceIO SAAS API Project')
    .setDescription('The Back-end API description')
    .setVersion('1.0')
    .addSecurity('ApiKeyAuth', {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    })
    .addSecurityRequirements('ApiKeyAuth')
    .build();

  app.setGlobalPrefix(APIPrefix);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
};
