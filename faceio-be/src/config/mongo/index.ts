import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseMongoConfig = MongooseModule.forRootAsync({
  useFactory: async () => ({
    uri: process.env.URL_MONGODB,
  }),
});
