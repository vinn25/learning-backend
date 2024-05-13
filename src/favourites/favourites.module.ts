import { Module } from '@nestjs/common';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FavouriteSchema, favourite } from './schema/favourites.schema';
import { Movie, MovieSchema } from 'src/movies/schema/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: favourite.name, schema: FavouriteSchema },
      { name: Movie.name, schema: MovieSchema }
    ])
  ],
  controllers: [FavouritesController],
  providers: [FavouritesService]
})
export class FavouritesModule { }
