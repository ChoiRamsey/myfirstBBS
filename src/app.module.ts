import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PostsModule, AuthModule, CommentsModule, BookmarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
