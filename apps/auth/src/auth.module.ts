import { Module } from '@nestjs/common';
import { AppConfigModule, HealthModule, LoggerModule } from '@app/common';
import Joi from 'joi';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    AppConfigModule.forRoot(
      Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        HTTP_PORT: Joi.number().port().required(),
        DATABASE_URL: Joi.string().uri({ scheme: 'postgresql' }).required(),
        JWT_SECRET: Joi.string().min(32).required(),
        JWT_EXPIRATION: Joi.string().default('15m'),
        LOG_LEVEL: Joi.string()
          .valid('trace', 'debug', 'info', 'warn', 'error', 'fatal')
          .optional(),
      }),
      'apps/auth/.env',
    ),
    LoggerModule,
    HealthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
