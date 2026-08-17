import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import type { ObjectSchema } from 'joi';

@Module({})
export class AppConfigModule {
  static forRoot(
    validationSchema: ObjectSchema,
    envFilePath?: string | string[],
  ): DynamicModule {
    return {
      module: AppConfigModule,
      imports: [
        NestConfigModule.forRoot({
          isGlobal: true,
          envFilePath,
          validationSchema,
          validationOptions: {
            abortEarly: false,
            allowUnknown: true,
          },
        }),
      ],
    };
  }
}
