import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { UsersModule } from './users/users.module';
import { Story } from './stories/stories.module';

@Module({
  imports: [StoriesModule, Story, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
