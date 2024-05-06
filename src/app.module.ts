import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FavouritesModule } from './favourites/favourites.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    FavouritesModule,
    MongooseModule.forRoot(
      'mongodb://kadencestaging:jzTtGK8UIz6Llz7Y@ac-nmlcycm-shard-00-00.ssrrw1t.mongodb.net:27017,ac-nmlcycm-shard-00-01.ssrrw1t.mongodb.net:27017,ac-nmlcycm-shard-00-02.ssrrw1t.mongodb.net:27017/ack?retryWrites=true&w=majority&authSource=admin&tls=true'
    )
  ],
})
export class AppModule { }
