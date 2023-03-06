import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [PostsModule, AuthModule, CommentsModule, BookmarksModule],
})
export class AppModule {}
