import { Module,ConfigModule } from '@nestjs/common';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [Confi,StripeModule],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
