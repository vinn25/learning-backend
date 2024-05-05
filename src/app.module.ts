import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FavouritesModule } from './favourites/favourites.module';

@Module({
  imports: [UsersModule, FavouritesModule],
})
export class AppModule { }
